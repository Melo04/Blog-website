import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {MdOutlineContentPaste} from 'react-icons/md';
import {TfiWrite} from 'react-icons/tfi';
import { BsFillPeopleFill } from "react-icons/bs";

export default function info() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const leftToRightAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.75, ease: "easeOut" },
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
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div className="container mx-auto xl:px-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 flex items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={leftToRightAnimation}
            >
              <div className="mb-12 lg:mb-0">
                <div
                  className="block rounded-lg shadow-2xl px-6 py-12 md:px-12 lg:-mr-14"
                  style={{
                    background: "linear-gradient(to right, #0013FF, #D5FFFD)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-200">
                    Enjoy the moment
                  </h2>

                  <p className="text-white mb-6 pb-2 lg:pb-0">
                    Welcome to the world of technology! From cutting-edge
                    gadgets to the latest software updates, we cover it all. Our
                    team of tech enthusiasts is dedicated to providing you with
                    informative and engaging content that helps you stay
                    up-to-date with the fast-paced tech landscape.
                  </p>

                  <div className="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                    <p className="flex items-center text-white mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                      <MdOutlineContentPaste className="mr-2 border-white border rounded-full p-1.5 text-3xl" />
                      Best Quality
                    </p>

                    <p className="flex items-center text-white mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                      <TfiWrite className="mr-2 border-white border rounded-full p-1.5 text-3xl" />
                      Best experience
                    </p>

                    <p className="flex items-center text-white mb-2 lg:mb-0 mx-auto md:mx-0">
                      <BsFillPeopleFill className="mr-2 border-white border rounded-full p-1.5 text-3xl" />
                      Best support
                    </p>
                  </div>

                  <p className="text-white mb-0">
                    Join us on this exciting technological journey as we delve
                    into the latest trends, review the newest gadgets, and
                    provide practical tips and tricks to enhance your tech
                    experience. Whether you are a tech enthusiast, a casual
                    user, or just curious about the latest advancements, our
                    blog is your go-to destination for informative and engaging
                    content. With a keen eye on the ever-changing tech
                    landscape, we aim to keep you informed about the latest
                    trends, breakthroughs, and updates in the world of
                    technology.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={rightToLeftAnimation}
            >
              <div>
                <img
                  src="https://img.freepik.com/free-vector/floating-man-using-virtual-reality-headset-concept_52683-52780.jpg?w=1060&t=st=1680937412~exp=1680938012~hmac=ee08dfca9b6526347bcc0cd46f405f71fe9dab17e2708574af555c8e90fe797a"
                  className="w-full rounded-lg shadow-lg border border-green-200"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
