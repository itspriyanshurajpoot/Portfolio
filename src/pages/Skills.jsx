import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiSpringboot, SiSpring, SiExpress } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: FaCss3, name: "CSS3", color: "text-blue-500" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
    { icon: FaReact, name: "React", color: "text-cyan-400" },
    { icon: RiTailwindCssFill, name: "Tailwind", color: "text-cyan-500" },
    { icon: GrMysql, name: "MySQL", color: "text-blue-600" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: FaJava, name: "Java", color: "text-red-500" },
    { icon: SiSpringboot, name: "Spring Boot", color: "text-green-600" },
    { icon: SiSpring, name: "Spring", color: "text-green-500" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express", color: "text-gray-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="w-full py-10" id="skills">
      <div className="max-w-6xl mx-auto">
        <h1 className="max-w-fit text-[16px] font-semibold mx-auto mb-8 md:mb-16 text-center text-neutarl-300 bg-gray-700 px-6 py-2 rounded-full">
          <span>Skills & Technologies</span>
        </h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-6 gap-8 md:gap-12"
        >
          {skills.map((Skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center group"
            >
              <div className="p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-lg group-hover:-translate-y-2 transition-all duration-300">
                <Skill.icon 
                  className={`text-3xl md:text-4xl ${Skill.color} transition-all duration-300 group-hover:scale-110`} 
                />
              </div>
              <span className="mt-2 text-xs md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {Skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;