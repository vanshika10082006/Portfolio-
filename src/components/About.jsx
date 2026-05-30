import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaCode, FaCalendarAlt, FaStar } from "react-icons/fa";
import { aboutInfo } from "../data/portfolioData";

// Icons map for detail cards
const iconMap = {
  graduation: <FaGraduationCap size={22} />,
  code: <FaCode size={22} />,
  calendar: <FaCalendarAlt size={22} />,
  star: <FaStar size={22} />,
};

// Reusable animated wrapper using Intersection Observer
function AnimatedSection({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-['Syne'] text-4xl font-bold text-white mb-2">About Me</h2>
          <div className="section-underline" />
        </AnimatedSection>

        {/* Main Card */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-10">

              {/* Left: Summary Text */}
              <div className="space-y-5">
                {aboutInfo.summary.map((para, i) => (
                  <p key={i} className="text-white/65 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Right: Detail Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {aboutInfo.details.map((detail, i) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.5 }}
                    className="glass-card card-hover p-5 rounded-xl flex flex-col gap-2"
                    style={{ background: "rgba(139,92,246,0.05)", borderColor: "rgba(139,92,246,0.15)" }}
                  >
                    {/* Icon */}
                    <span className="text-purple-400">{iconMap[detail.icon]}</span>
                    {/* Label */}
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider">
                      {detail.label}
                    </p>
                    {/* Value */}
                    <p className="text-white font-medium text-sm leading-snug">{detail.value}</p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
