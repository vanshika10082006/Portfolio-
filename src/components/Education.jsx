import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaTrophy } from "react-icons/fa";
import { achievements } from "../data/portfolioData";

// Education timeline data
const education = [
  {
    degree: "B.Tech — Computer Science & Information Technology",
    institution: "Ajay Kumar Garg Engineering College, Ghaziabad",
    year: "2023 – 2027",
    status: "Pursuing",
    cgpa: "8.5+",
  },
  {
    degree: "Senior Secondary (XII) — Science",
    institution: "CBSE Board",
    year: "2023",
    status: "Completed",
    cgpa: "92%",
  },
];

export default function Education() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <>
      {/* ── Education Section ─────────────────────────────────── */}
      <section id="education" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="font-['Syne'] text-4xl font-bold text-white mb-2">Education</h2>
            <div className="section-underline" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card card-hover p-6 flex gap-5"
              >
                <div className="mt-1 w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-purple-400" size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-['Syne'] font-bold text-white text-base">{edu.degree}</h3>
                    <span className="tech-badge">{edu.year}</span>
                  </div>
                  <p className="text-white/50 text-sm mb-2">{edu.institution}</p>
                  <div className="flex gap-3">
                    <span className="px-2 py-0.5 rounded text-xs bg-green-500/10 border border-green-500/20 text-green-400">
                      {edu.status}
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      {edu.cgpa}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements Section ────────────────────────────────── */}
      <section id="achievements" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Syne'] text-4xl font-bold text-white mb-2">Achievements</h2>
            <div className="section-underline" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-all duration-300">
                  <FaTrophy className="text-purple-400" size={20} />
                </div>
                <h3 className="font-['Syne'] font-bold text-white text-sm mb-2">{ach.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{ach.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
