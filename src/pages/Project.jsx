import { useMemo, useState } from "react";
import { motion, AnimatePresence, scale, hover } from "framer-motion";
import { assets } from "../assets/assets";

/* Example projects - replace images/links with your own */
const projectsData = [
  {
    id: "p1",
    title: "Portfolio Website",
    short: "Personal portfolio built with React & Tailwind",
    description:
      "Responsive portfolio with animations, dark mode and contact form. Built to showcase projects and blog posts.",
    image: assets.thumbnail1, // put real image in public/ or import from assets
    tags: ["React", "Tailwind", "Framer motion"],
    demo: "https://priyanshuportfolio-eight.vercel.app/",
    repo: "https://github.com/itspriyanshurajpoot/priyanshu_portfolio",
  },
  {
    id: "p2",
    title: "Blogging Application",
    short: "Full-featured blogging platform with editor & tagging",
    description:
      "Responsive blogging app with a rich-text editor, post management, search, comments and user auth. Frontend built with React and Tailwind; backend (API) with Java/Spring boot.",
    image: "/placeholder-project.png",
    tags: ["React","CSS", "Java/Spring Boot", "MySQL", "Cloudinary", "JWT"],
    demo: "https://blogging-application-frontend-eta.vercel.app/",
    repo: "https://github.com/itspriyanshurajpoot/Blogging-Application-Frontend",
  },
];

const parentVariant = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }
}

const childVariant = {
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

  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  }
};

const Project = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [selected, setSelected] = useState(null);

  const tags = useMemo(() => {
    const s = new Set();
    projectsData.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s)];
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === "All") return projectsData;
    return projectsData.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section id="projects" className="w-full px-7 md:px-20 md:py-10 md:mb-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="max-w-fit text-[16px] font-semibold mx-auto mb-8 md:mb-16 text-center text-neutarl-300 bg-gray-700 px-6 py-2 rounded-full">
          <span>Projects</span>
        </h1>

        {/* tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                activeTag === t
                  ? "bg-cyan-500 text-black shadow-md"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700/60"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div
          variants={parentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              variants={childVariant}
              className="relative rounded-xl overflow-hidden bg-slate-900/40 border border-slate-700 shadow-lg"
            >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-44 sm:h-48 object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-250 flex items-end p-4">
                  <div className="w-full">
                    <h3 className="text-white font-semibold text-lg">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-300 line-clamp-2">
                      {p.short}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <p className="text-xs text-slate-400">
                      {p.tags.join(" • ")}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-md bg-slate-800 text-slate-200 text-sm hover:bg-slate-700/70"
                    >
                      Demo
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-md border border-slate-700 text-slate-200 text-sm hover:bg-slate-800/60"
                    >
                      Code
                    </a>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-400 line-clamp-3">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setSelected(p)}
                    className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-medium hover:from-cyan-600 hover:to-blue-600"
                  >
                    View
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="bg-slate-900 w-full max-w-3xl rounded-lg overflow-hidden border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {selected.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {selected.tags.join(" • ")}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Close"
                    className="text-slate-300 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <p className="mt-4 text-slate-300">{selected.description}</p>

                <div className="mt-6 flex gap-3">
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-md bg-cyan-500 text-black font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selected.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-md border border-slate-700 text-slate-200"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
