import React from "react";
import { motion } from "framer-motion";
import { abboutText, assets } from "../assets/assets";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      id="about"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="max-w-fit text-[16px] font-semibold mx-auto mb-8 md:mb-16 text-center text-neutarl-300 bg-gray-700 px-6 py-2 rounded-full">
          <span>About Me</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Container */}
          <motion.div variants={itemVariants} className="relative group">
            <div className=" rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src={assets.aboutImage}
              alt="Profile"
              className="relative w-full max-w-md mx-auto rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            />
          </motion.div>

          {/* Content Container */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              {abboutText.map((item) => (
                <motion.p
                  key={item.id}
                  variants={itemVariants}
                  className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed sm:leading-relaxed lg:leading-relaxed text-justify"
                >
                  {item.text}
                </motion.p>
              ))}
            </div>

            {/* Optional: Add social links or call-to-action */}
            <motion.div
              variants={itemVariants}
              className="pt-6 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:bg-slate-800/50 transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
