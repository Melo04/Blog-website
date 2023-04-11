import Header from "@/components/header";
import Footer from "@/components/footer";
import Review from "@/components/review";
import Card from "@/components/card";
import Animated from "@/components/animated";
import Abt from "@/components/abt";
import Info from "@/components/info";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import TypeWriterText from "@/components/TypeWriterText";
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import Typewriter from "typewriter-effect";

export default function about() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

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
    visible: { opacity: 1, x: 0, transition: { duration: 2, ease: 'easeOut' } },
  };

  const scaleAnimation = {
    hidden: { opacity: 0, scale: 1.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };


  return (
    <>
      {loading ? (
        <div className="bg flex-col bg-gray-800 flex justify-center items-center gap-40 w-full h-screen">
          <PacmanLoader color={"#D4FFB8"} loading={loading} size={90} />
          <div className="justify-center text-center">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span class="text-5xl font-black uppercase font-mono italic tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300">Getting Ready...</span>'
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Info />

          <div style={{ overflow: "hidden" }}>
            <motion.div className="container" style={{ scale }}>
              <TypeWriterText />
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleAnimation}
          >
            <Abt />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rightToLeftAnimation}
          >
            <div className="w-full bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 h-screen flex items-center justify-center">
              <Animated />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={leftToRightAnimation}
          >
            <Card />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation}
          >
            <Review />
          </motion.div>
          <Footer />
        </>
      )}
    </>
  );
}
