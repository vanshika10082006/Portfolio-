import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projects } from "../data/portfolioData";

// Gradient project image placeholder (used when no image is provided)
const projectGradients = [
  "from-violet-600 via-purple-700 to-indigo-800",
  "from-indigo-600 via-blue-700 to-cyan-800",
  "from-purple-600 via-violet-700 to-blue-800",
  "from-blue-600 via-indigo-700 to-purple-800",
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-card overflow-hidden flex flex-col group"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.07)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Project Image / Placeholder */}
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${projectGradients[index % 4]}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {/* Abstract code-like decoration */}
            <div className="font-mono text-white/20 text-xs select-none leading-relaxed text-center px-4">
              <div>{'<div className="project">'}</div>
              <div className="pl-4 text-white/30">{'<h2>{title}</h2>'}</div>
              <div className="pl-4">{'<p>{description}</p>'}</div>
              <div>{'</div>'}</div>
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-['Syne'] font-bold text-white text-base mb-2 leading-snug group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-purple-400 transition-colors group/link"
          >
            View Project
            <FaArrowRight size={10} className="group-hover/link:translate-x-1 transition-transform duration-200" />
          </a>
          <div className="flex-1" />
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
          >
            <FaGithub size={14} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
          >
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-['Syne'] text-4xl font-bold text-white mb-2">Projects</h2>
          <div className="section-underline" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
