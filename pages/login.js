import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import styles from "@/styles/Form.module.css";
import Image from 'next/image'
import {HiFingerPrint} from 'react-icons/hi'
import { useState } from "react";
import {signIn, signOut} from "next-auth/react"
import { useFormik } from "formik";
import { useRouter } from "next/router";
import login_validate from "./lib/validate";
import {MdEmail} from 'react-icons/md'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit
  })

  async function onSubmit(values) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl:"/"
    })
    
    if(status.ok) router.push("http://localhost:3000/profile");
  }

  async function handleGoogleSignIn() {
    try{
      await signIn("google", {
        callbackUrl: "http://localhost:3000/profile?loginSuccess=true",
      });
    }catch(error) {
        toast.error("Failed to log in!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    }
  }

  //Github Login
  async function handleGithubSignIn() {
    signIn("github", { callbackUrl: "http://localhost:3000/profile" });
  }

  return (
    <Layout imgUrl="/images/login/img1.png" alt="">
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <ToastContainer />
        <div className="title">
          <h1 className="text-gray-800 text-3xl font-bold py-1">Login Now</h1>
          <p className="w-full text-gray-400">
            Login now and enjoy our services
          </p>
        </div>

        <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <MdEmail size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className="text-rose-500 -my-1.5">{formik.errors.email}</span>
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
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              onChange={formik.handleChange}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500 -my-1.5">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}

          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>

          <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className={styles.button_custom}
            >
              Sign In With Google{" "}
              <Image
                src={"/images/login/google.svg"}
                width={20}
                height={20}
                alt=""
              ></Image>
            </button>
          </div>

          <div className="input-button">
            <button
              type="button"
              onClick={handleGithubSignIn}
              className={styles.button_custom}
            >
              Sign In With Github{" "}
              <Image
                src={"/images/login/github.svg"}
                width={25}
                height={25}
                alt=""
              ></Image>
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link href={"/register"} className="text-rose-500 font-bold -mt-20">
            Sign Up here
          </Link>
        </p>
      </section>
    </Layout>
  );
}
