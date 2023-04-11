import Image from "next/image"
import Author from "./_child/author"
import Link from "next/link"
import getPost from "../lib/helper"
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"
import { useMotionValue, useTransform, motion } from "framer-motion";

export default function section2() {
   const x = useMotionValue(0);
   const y = useMotionValue(0);
   const rotateX = useTransform(y, [-100, 100], [30, -30]);
   const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const { data, isLoading, isError } = fetcher('api/posts')
  
  if(isLoading) return <Spinner></Spinner>
  if(isError) return <Error></Error>

  const rightToLeftAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };
  
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-sans font-extrabold text-4xl py-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400">
          Trending In Blogger
        </span>{" "}
        🔥
      </h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={rightToLeftAnimation}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {data &&
            data
              .slice(0, 6)
              .map((item, index) => <Post data={item} key={index}></Post>)}
        </div>
      </motion.div>
    </section>
  );
}

function Post({data}) {
  const { id, title, description, category, img, published, author } = data;

  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || "/"}
            className="rounded"
            width={500}
            height={350}
            alt="blog"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link
            href={`/posts/${id}`}
            className="text-indigo-600 hover:text-purple-400"
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
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {description && description.length > 100
            ? description.slice(0, 200) + "..."
            : description || "description"}
        </p>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}