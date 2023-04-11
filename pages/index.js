import Format from '../layout/format'
import Section1 from '../components/section1'
import Section2 from "../components/section2";
import Section3 from '../components/section3';
import Section4 from '../components/section4';
import TypeWriterText2 from '@/components/TypeWriterText2';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const scaleAnimation = {
    hidden: { opacity: 0, scale: 1.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
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
          <Format>
            <Section1></Section1>
            <Section2></Section2>
            <div style={{ overflow: "hidden" }}>
              <motion.div className="container" style={{ scale }}>
                <TypeWriterText2 />
              </motion.div>
            </div>
            <Section4></Section4>
            <Section3></Section3>
          </Format>
        </>
      )}
    </>
  );
}
