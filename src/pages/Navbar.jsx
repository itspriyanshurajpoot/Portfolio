import React from "react";
import { navBarItems, assets } from "../assets/assets";
import { motion, scale, stagger } from "motion/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import { delay } from "motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const resumeLink = assets?.resume || "/resume.pdf";
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);

  const listVariants = {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const commonVarient = {
    hidden: {
      opacity: 0,
      y: -10,
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

  const itemVarient = {
    hidden: {
      opacity: 0,
      y: -6,
      scale: 0.98,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },

    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const hamburgurVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const hamburgerParentVarient = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: -2,
      },
    },
  };

  const hamburgerItemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },

    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="translate-3d w-full min-h-[15%] max-h-[15%] flex justify-between items-center px-10 py-4">
      <motion.div
        variants={commonVarient}
        initial="hidden"
        animate="visible"
        className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 font-bold text-2xl"
      >
        <Link to={"/"}>PORTFOLIO</Link>
      </motion.div>
      <div className="hidden md:flex flex-row items-center">
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {navBarItems &&
            navBarItems.map((item) => (
              <motion.li
                key={item.id}
                variants={itemVarient}
                initial="hidden"
                whileHover="hover"
                animate="visible"
                className="inline-block "
              >
                <Link
                  smooth={true}
                  duration={500}
                  to={item.link}
                  className="block"
                >
                  <motion.span className="relative mx-4 cursor-pointer hover:text-cyan-500 duration-300">
                    {item.title}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
        </motion.ul>

        <motion.a
          href={resumeLink}
          download="Priyanshu_Resumeeee.pdf"
          whileHover={{
            rotateX: 6,
            rotateY: 6,
            scale: 1.01,
            boxShadow: "0px 4px 10px rgba(8, 112, 184, 0.7)",
            border: "1px solid rgba(8, 112, 184, 0.7)",
          }}
          variants={commonVarient}
          initial="hidden"
          animate="visible"
          style={{
            translateZ: 100,
          }}
          className="border border-gray-500 px-4 py-2 ml-6 hover:cursor-pointer relative group duration-300 rounded-md shadow-[0px_1px_10px_0px_rgba(225, 225, 225, 0.2)_inset,0px_-1px_2px_0px_rgba(225, 225, 225, 0.2)_inset inline-block"
        >
          <span className="group-hover:text-cyan-500 transition-colors duration-300">
            Download CV
          </span>
          <span className="absolute bottom-0 w-2/3 mx-auto h-0.5 linear inset-x-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent"></span>
          <span className="absolute blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-1 w-2/3 mx-auto h-0.5 linear inset-x-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent"></span>
        </motion.a>
      </div>
      <div className="md:hidden text-white">
        {isHamburgerOpen ? (
          <RxCrossCircled size={20} onClick={() => setIsHamburgerOpen(false)} />
        ) : (
          <RxHamburgerMenu size={20} onClick={() => setIsHamburgerOpen(true)} />
        )}
        {isHamburgerOpen && (
          <motion.div
            variants={hamburgurVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: "0.3",
              ease: "easeInOut",
            }}
            className="absolute top-10 right-14 bg-[#1a1a1a] border border-gray-700 rounded-md shadow-lg py-4 px-6 flex flex-col items-start"
          >
            <motion.ul
              className="flex flex-col w-full mb-2"
              variants={hamburgerParentVarient}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              {navBarItems &&
                navBarItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="w-full py-2"
                    variants={hamburgerItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    whileHover="hover"
                  >
                    <Link
                      smooth={true}
                      duration={500}
                      to={item.link}
                      key={item.id}
                      className="w-full py-2 text-white hover:text-cyan-500 duration-300"
                      onClick={() => setIsHamburgerOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
            </motion.ul>
            <motion.div variants={hamburgerItemVariants}>
              <a
                href={resumeLink}
                download="Priyanshu_Resume.pdf"
                className="w-full py-2 text-white hover:text-cyan-500 duration-300"
                onClick={() => setIsHamburgerOpen(false)}
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
