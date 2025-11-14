import { Link, useNavigate } from "react-router";
import { assets } from "../assets/assets";
import { motion, scale, stagger } from "motion/react";

const Hero = () => {
  const commonVarient = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVarient = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Give a blur effect to the text on load
  const textVarient = {
    hidden: {
      opacity: 0,
      y: -20,
      filter: "blur(4px)",
    },

    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="bg-[#1E1E1D] text-white flex flex-col gap-10 md:flex-row items-center justify-between px-7 md:px-20 md:py-10 md:mb-10"
    >
      {/* Left Side (Text Section) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVarient}
        className="md:w-1/2 px-4 text-left space-y-2 order-2 md:order-1"
      >
        <p className="text-[#00ffff] font-medium text-[16px] tracking-wide">
          Hello, I’m
        </p>

        <h1 className="text-3xl text-neutral-200 md:text-4xl font-bold font-poppins">
          Priyanshu Kumar Singh
        </h1>

        <h2 className="text-[18px] md:text-2xl text-neutral-300 font-poppins mb-4">
          Full Stack Developer | Java Enthusiast | MERN
        </h2>

        <p className="text-gray-300 leading-relaxed font-poppins">
          I’m a passionate developer who loves turning ideas into real-world
          applications. I specialize in building modern, scalable, and visually
          engaging web experiences using{" "}
          <span className="text-[#00ffff] font-semibold">ReactJS</span>,
          <span className="text-[#8b5cf6] font-semibold"> Spring Boot</span>,
          and
          <span className="text-[#00ffff] font-semibold"> MongoDB</span>. Let’s
          build something amazing together!
        </p>

        {/* Buttons */}
        <div className="pt-4 space-x-4">
          <motion.button
            whileHover={{
              rotateX: 6,
              rotateY: 6,
              scale: 1.01,
              boxShadow: "0px 4px 10px #00ffff",
              border: "1px solid rgba(8, 112, 184, 0.7)",
            }}
            variants={commonVarient}
            initial="hidden"
            animate="visible"
            style={{
              translateZ: 100,
            }}
            className="border border-[#00ffff] px-4 py-2 hover:cursor-pointer relative group duration-300 rounded-md shadow-[0px_1px_10px_0px_rgba(225, 225, 225, 0.2)_inset,0px_-1px_2px_0px_rgba(225, 225, 225, 0.2)_inset inline-block"
          >
            <a href="#projects">
              <span className="group-hover:text-[#00ffff] transition-colors duration-300">
                View Projects
              </span>
            </a>
          </motion.button>
          <motion.button
            whileHover={{
              rotateX: 6,
              rotateY: 6,
              scale: 1.01,
              boxShadow: "0px 4px 10px #00ffff",
              border: "1px solid rgba(8, 112, 184, 0.7)",
            }}
            variants={commonVarient}
            initial="hidden"
            animate="visible"
            style={{
              translateZ: 100,
            }}
            className="border border-[#00ffff] px-4 py-2 hover:cursor-pointer relative group duration-300 rounded-md shadow-[0px_1px_10px_0px_rgba(225, 225, 225, 0.2)_inset,0px_-1px_2px_0px_rgba(225, 225, 225, 0.2)_inset inline-block"
          >
            <a href="#contact">
              <span className="group-hover:text-[#00ffff] transition-colors duration-300">
                Contact Me
              </span>
            </a>
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side (Image Section) */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center order-1 md:order-2">
        <motion.img
          variants={imageVarient}
          initial="hidden"
          animate="visible"
          src={assets.mainImage} // replace with your image path
          alt="Priyanshu Kumar Singh"
          className="w-90 md:w-100 md:h-100 md:ml-15 rounded-lg object-cover shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
        />
      </div>
    </section>
  );
};

export default Hero;
