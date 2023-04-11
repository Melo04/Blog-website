import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/author';
import "swiper/css";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import { useMotionValue, useTransform, motion } from "framer-motion";

export default function section3() {
   const { data, isLoading, isError } = fetcher("api/posts");

   if (isLoading) return <Spinner></Spinner>;
   if (isError) return <Error></Error>;


   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const leftToRightAnimation = {
     hidden: { opacity: 0, x: -100 },
     visible: {
       opacity: 1,
       x: 0,
       transition: { duration: 2, ease: "easeOut" },
     },
   };

  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-sans font-extrabold text-4xl py-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-green-400 to-green-700">
          Recommended Blog Posts
        </span>{" "}
        📖
      </h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={leftToRightAnimation}
      >
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {data.slice(6, 13).map((item, index) => (
            <SwiperSlide key={index}>
              <Post data={item}></Post>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, description, author } = data;
  return (
    <div className="grid">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || "/"}
            className="rounded"
            width={600}
            height={400}
            alt='hi'
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link
            href={`/posts/${id}`}
            className="text-orange-600 hover:text-orange-600"
          >
            {category || "Unknown"}
          </Link>
          <Link
            href={`/posts/${id}`}
            className="text-gray-800 hover:text-gray-600"
          >
            - {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {description && description.length > 100
            ? description.slice(0, 500) + "..."
            : description || "description"}
        </p>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}