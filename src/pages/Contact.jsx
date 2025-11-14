// ...existing code...
import React from "react";
import { CiMail } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { motion } from "motion/react";
import { delay } from "motion";

const Contact = () => {
  const [copied, setCopied] = React.useState("");

  const containerVarient = {
    hidden: {
      opacity: 0,
      scale: 0.98,
      y: 20,
    },

    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVarient = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contact = [
    {
      id: "email",
      icon: CiMail,
      label: "Email",
      value: "priyanshurajrajput93@gmail.com",
    },
    {
      id: "phone",
      icon: IoMdContact,
      label: "Phone",
      value: "+91 9334784482",
    },
    {
      id: "linkedin",
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/priyanshu-raj-rajput/",
    },
    {
      id: "github",
      icon: FaGithub,
      label: "GitHub",
      value: "",
    },
  ];

  const copyToClipboard = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(""), 2000);
    } catch {
      setCopied("err");
      setTimeout(() => setCopied(""), 2000);
    }
  };

  return (
    <motion.section className="w-full flex flex-col bg-black items-center justify-center px-4 py-16 rounded-xl gap-4 md:px-10 md:py-20">
      <h1 className="text-[16px] font-semibold mb-2 text-center text-neutral-200 bg-gray-700 px-6 py-2 rounded-full">
        <span>Get In Touch</span>
      </h1>
      <p className="lg:max-w-[60%] text-center text-sm font-semibold text-neutral-400 mb-4">
        I’m currently seeking exciting job opportunities as a Full Stack
        Developer. Feel free to reach out for collaboration, hiring, or any
        development project discussion.
      </p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVarient}
        viewport={{once: true}}
        className="w-full flex flex-col gap-4 items-center"
      >
        {contact.map((item) => (
          <motion.div
            variants={itemVarient}
            key={item.id}
            className="w-full max-w-md md:max-w-xl flex items-center justify-between bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg px-4 py-3 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <item.icon className="text-2xl text-cyan-400" />
              <span className="text-sm font-medium text-neutral-300">
                {item.label}:
              </span>
            </div>
            <div className="flex items-center gap-4">
              {item.id === "github" || item.id === "linkedin" ? (
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-300 hover:underline"
                >
                  Priyanshu Singh
                </a>
              ) : (
                <span className="text-sm font-medium text-neutral-300">
                  {item.value}
                </span>
              )}
              <button
                onClick={() => copyToClipboard(item.value, item.id)}
                className="text-sm font-medium text-cyan-400 hover:underline"
              >
                {copied === item.id ? "Copied!" : "Copy"}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
