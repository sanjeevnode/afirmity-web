import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const controls = useAnimation();

  const parentHover = () => {
    controls.start("hover");
  };

  const parentUnhover = () => {
    controls.start("unhover");
  };

  return (
    <div
      id="home"
      className="w-full max-w-full h-[420px] md:h-screen max-md:pt-10  relative flex justify-center items-center overflow-hidden "
    >
      <motion.img
        src="/Hero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
      />
      <div className="max-w-6xl  flex   min-[1200px]:justify-end px-6 md:px-10 z-10 min-[1200px]:px-0 justify-start items-center h-full  w-full">
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
          >
            <span className="md:text-[20px] text-[18px]  text-white">
              Meet Consulting
            </span>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "linear" }}
          >
            <span className="md:text-6xl  text-3xl text-white font-bold">
              Financial Analysis Developing Meeting.
            </span>
          </motion.div>

          <motion.div
            onMouseEnter={parentHover}
            onMouseLeave={parentUnhover}
            animate={controls}
            className="  relative  w-fit flex justify-center items-center cursor-pointer"
          >
            <motion.div
              initial={"unhover"}
              animate={controls}
              variants={{
                hover: {
                  scale: 0,
                  opacity: 0,
                },
                unhover: {
                  scale: 1,
                  opacity: 1,
                },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-14 h-14 md:w-8 md:h-8  border rounded-[50%] "
            ></motion.div>
            <motion.div
              initial={"unhover"}
              animate={controls}
              variants={{
                hover: {
                  scale: 1,
                  opacity: 1,
                },
                unhover: {
                  scale: 0,
                  opacity: 0,
                },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className=" w-14 h-14 md:w-8 md:h-8 bg-white flex justify-center items-center rounded-[50%]  absolute inset-0 "
            >
              <ArrowRight className="w-10 h-8 text-black" />
            </motion.div>
            <motion.div
              initial={"unhover"}
              animate={controls}
              variants={{
                hover: {
                  x: 20,
                },
                unhover: {
                  x: -30,
                },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span className="text-xl text-white font-bold">Our Services</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero Corner */}

      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5, ease: "linear" }}
        className="absolute right-0 bottom-0 z-10    w-1/3  overflow-hidden "
      >
        <img
          src="/hero-corner.png"
          alt=""
          className="w-full h-full object-cover "
        />
      </motion.div>
    </div>
  );
};

export default Hero;
