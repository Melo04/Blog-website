import React from 'react'
import {
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import Link from "next/link";

export default function animated() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

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
      <div
        className="flex flex-col items-center py-10 h-screen w-screen"
        style={{ overflowY: "auto" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-black bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-green-500 inline-block">
            What Are We Trying to Achieve
          </h1>
          <p className="font-bold text-gray-600 mt-2 mb-10 sm:mb-28">
            Try Dragging Around The Cursors 🖐
          </p>
        </div>

        <div className="flex flex-wrap sm:space-x-60 sm:grid-cols-2 gap-x-6 gap-y-8 sm:-ml-8 space-y-4 sm:space-y-0 mx-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={leftToRightAnimation}
          >
            <div
              style={{ perspective: 2000 }}
              className="w-[250px] sm:w-[350px] min-h-[380px]"
            >
              <motion.div
                drag
                dragElastic={0.18}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                style={{ x, y, rotateX, rotateY, z: 100 }}
                className="w-[350px] min-h-[380px] bg-[#D1FFFD] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative"
              >
                <h1 className="text-2xl mb-6 font-extrabold">
                  Dive Into The World Of{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-400 to-green-500">
                    Technology
                  </span>{" "}
                  🚀
                </h1>
                <p className="max-w-[300px] text-[#000000] mb-6">
                  Join us on this exciting technological journey as we delve
                  into the latest trends, review the newest gadgets, and provide
                  practical tips and tricks to enhance your knowledge.
                </p>
                <div className="flex mb-6 sm:mb-12">
                  <Link
                    href={"/"}
                    className="flex text-center bg-gradient-to-r from-blue-500 to-green-400 text-white text-base font-medium py-3 px-6 rounded-lg"
                  >
                    <span className="mr-2">View Blogs</span>
                    <BsFillArrowRightCircleFill className="text-lg mt-1" />
                  </Link>
                </div>

                <motion.div
                  className="absolute top-40 -right-52 w-[400px]"
                  style={{ x, y, rotateX, rotateY, z: 100000 }}
                >
                  <img src="/images/login/3d2.png" alt="3d" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rightToLeftAnimation}
          >
            <div
              style={{ perspective: 2000 }}
              className="w-full sm:w-[350px] min-h-[380px]"
            >
              <motion.div
                drag
                dragElastic={0.18}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                style={{ x, y, rotateX, rotateY, z: 100 }}
                className="w-[350px] min-h-[380px] bg-[#E6E6FA] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative"
              >
                <h1 className="text-2xl mb-6 font-extrabold">
                  Informative and Engaging{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-400 to-orange-500">
                    Content
                  </span>{" "}
                  🚀
                </h1>
                <p className="max-w-[300px] text-[#000000] mb-6">
                  With a keen eye on the ever-changing tech landscape, we aim to
                  keep you informed about the latest trends, breakthroughs, and
                  updates in the world of technology.
                </p>
                <div className="flex mb-12">
                  <Link
                    href={"/"}
                    className="flex text-center bg-gradient-to-r from-indigo-500 to-purple-400 text-white text-base font-medium py-3 px-6 rounded-lg"
                  >
                    <span className="mr-2">View Blogs</span>
                    <BsFillArrowRightCircleFill className="text-lg mt-1" />
                  </Link>
                </div>

                <motion.div
                  className="absolute top-40 -right-52 w-[400px]"
                  style={{ x, y, rotateX, rotateY, z: 100000 }}
                >
                  <img src="/images/login/3d1.png" alt="3d" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    );
}
