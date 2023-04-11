import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import { useMotionValue, useTransform, motion } from "framer-motion";

export default function section4() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const { data, isLoading, isError } = fetcher("api/posts");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  const leftToRightAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  const rightToLeftAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <section className="container mb-20 mx-auto md:px-20">
      <h1 className="font-sans font-extrabold py-2 text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        Tech Journey: Discover, Learn, Innovate
      </h1>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftToRightAnimation}
        >
          <div className="item">
            <h1 className="font-extrabold text-3xl pt-12 text-center text-indigo-500">
              Tech Tips & Tricks 💡
            </h1>
            <div className="border-b-2 md:border-b-4 w-12 md:w-24 mx-auto mt-3 border-purple-400 mb-10 rounded-full"></div>
            <div className="flex flex-col gap-6">
              {data[1] ? <Post data={data[11]}></Post> : <></>}
              {data[2] ? <Post data={data[12]}></Post> : <></>}
              {data[3] ? <Post data={data[13]}></Post> : <></>}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rightToLeftAnimation}
        >
          <div className="item">
            <h1 className="font-extrabold text-3xl pt-12 text-center text-emerald-400">
              Developer Stories 📝
            </h1>
            <div className="border-b-2 md:border-b-4 w-12 md:w-24 mx-auto mt-3 border-green-300 mb-10 rounded-full"></div>
            <div className="flex flex-col gap-6">
              {data[14] ? <Post data={data[14]}></Post> : <></>}
              {data[15] ? <Post data={data[15]}></Post> : <></>}
              {data[16] ? <Post data={data[16]}></Post> : <></>}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Post({data}) {
  const { id, title, category, img, published, author } = data;

    return (
      <div className="flex gap-5">
        <div className="image flex flex-col justify-start">
          <Link href={`/posts/${id}`}>
            <Image
              src={img || "/"}
              className="rounded"
              width={300}
              height={250}
              alt="Post Image"
            />
          </Link>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="cat">
            <Link
              href={`/posts/${id}`}
              className="text-blue-700 hover:text-blue-300"
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
          {author ? <Author {...author}></Author> : <></>}
        </div>
      </div>
    );
}