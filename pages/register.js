import Head from "next/head";
import Layout from '../layout/layout';
import Link from "next/link";
import styles from "@/styles/Form.module.css";
import Image from "next/image";
import { HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";
import { registerValidate } from "./lib/validate";
import { useRouter } from "next/router";
import {MdEmail} from 'react-icons/md'
import { NextApiRequest, NextApiResponse } from "next";

export default function Register() {

  const [show, setShow] = useState({password: false, cpassword: false})
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit
  })

  async function onSubmit(values) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
    await fetch('http://localhost:3000/api/auth/signup', options)
    .then(res => res.json())
    .then((data) => {
      if(data) router.push('http://localhost:3000')
    })
  }

  return (
    <Layout imgUrl="/images/login/img2.png">
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-3xl font-bold py-1 -mt-4">
            Register
          </h1>
          <p className="w-full text-gray-400">
            Register now and become one of the exclusive bloggers
          </p>
        </div>

        <form
          className="flex flex-col gap-5 -mt-5"
          onSubmit={formik.handleSubmit}
        >
          <div
            className={`${styles.input_group} ${
              formik.errors.username && formik.touched.username
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="text"
              name="Username"
              placeholder="Username"
              className={styles.input_text}
              {...formik.getFieldProps("username")}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.username && formik.touched.username ? (
            <span className="text-rose-500 -my-3">
              {formik.errors.username}
            </span>
          ) : (
            <></>
          )}

          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <MdEmail size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className="text-rose-500 -my-3">{formik.errors.email}</span>
          ) : (
            <></>
          )}

          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500 -my-3">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}

          <div
            className={`${styles.input_group} ${
              formik.errors.cpassword && formik.touched.cpassword
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.input_text}
              {...formik.getFieldProps("cpassword")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.cpassword && formik.touched.cpassword ? (
            <span className="text-rose-500 -my-3">
              {formik.errors.cpassword}
            </span>
          ) : (
            <></>
          )}

          <div className="input-button -mb-6">
            <button type='submit' className={styles.button}>
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400">
          Already Registered?{" "}
          <Link href={"/login"} className="text-rose-500 font-bold -mt-20">
            Login here
          </Link>
        </p>
      </section>
    </Layout>
  );
}
