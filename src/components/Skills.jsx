import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma
} from "react-icons/fa";
import {
  SiTailwindcss, SiVscodium
} from "react-icons/si";
import { MdDevices } from "react-icons/md";
import { skills } from "../data/portfolioData";

// Icon component map
const IconMap = {
  html5: <FaHtml5 size={42} />,
  css3: <FaCss3Alt size={42} />,
  js: <FaJs size={42} />,
  react: <FaReact size={42} />,
  tailwind: <SiTailwindcss size={42} />,
  responsive: <MdDevices size={42} />,
  git: <FaGitAlt size={42} />,
  github: <FaGithub size={42} />,
  vscode: <SiVscodium size={42} />,
  figma: <FaFigma size={42} />,
};

// Individual skill card
function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="glass-card p-6 flex flex-col items-center gap-3 cursor-default rounded-2xl group"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.07)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Icon with color */}
      <motion.span
        style={{ color: skill.color }}
        animate={inView ? { rotate: [0, -5, 5, 0] } : {}}
        transition={{ delay: index * 0.08 + 0.3, duration: 0.5 }}
        className="group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-300"
      >
        {IconMap[skill.icon]}
      </motion.span>

      {/* Name */}
      <p className="text-white/80 text-sm font-medium text-center leading-tight whitespace-pre-line">
        {skill.name}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle section bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Section Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-['Syne'] text-4xl font-bold text-white mb-2">My Skills</h2>
          <div className="section-underline" />
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-5 text-center">
            — Frontend —
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.frontend.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-5 text-center">
            — Tools —
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {skills.tools.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i + skills.frontend.length} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
