import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedinIn, FaEnvelope, FaDownload
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

// Fade-up animation preset
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

// Initials avatar fallback (shown when no profile image)
function ProfileAvatar({ name }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  return (
    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 flex items-center justify-center">
      <span className="text-white font-['Syne'] font-bold text-7xl">{initials}</span>
    </div>
  );
}

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />

      {/* Dot grid top-right */}
      <div className="absolute top-24 right-8 w-32 h-32 dot-grid opacity-40 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* ── Left: Text Content ─────────────────────── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Greeting */}
            <motion.p {...fadeUp(0.1)} className="font-mono text-purple-400 text-sm tracking-widest uppercase mb-3">
              👋 Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} className="font-['Syne'] text-5xl sm:text-6xl xl:text-7xl font-bold leading-tight mb-4">
              <span className="gradient-text">{personalInfo.firstName}</span>{" "}
              <span className="text-white">{personalInfo.lastName}</span>
            </motion.h1>

            {/* Role */}
            <motion.p {...fadeUp(0.3)} className="text-purple-400 font-semibold text-lg sm:text-xl mb-5 font-['Syne']">
              {personalInfo.role}
            </motion.p>

            {/* Tagline */}
            <motion.p {...fadeUp(0.4)} className="text-white/60 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href={personalInfo.resumeUrl} download className="btn-primary flex items-center gap-2">
                <FaDownload size={14} />
                Download Resume
              </a>
              <button
                onClick={() => handleScroll("contact")}
                className="btn-outline flex items-center gap-2"
              >
                <FaEnvelope size={14} />
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeUp(0.6)}>
              <p className="text-white/40 text-sm mb-3 font-mono">Connect with me</p>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                {[
                  { icon: <FaGithub size={18} />, href: personalInfo.github, label: "GitHub" },
                  { icon: <FaLinkedinIn size={18} />, href: personalInfo.linkedin, label: "LinkedIn", bg: true },
                  { icon: <FaEnvelope size={18} />, href: `mailto:${personalInfo.email}`, label: "Email" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      s.bg
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "border border-white/20 text-white/70 hover:text-white hover:border-purple-500 hover:bg-purple-500/10"
                    }`}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Profile Image ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            {/* Outer glow ring */}
            <div className="relative">
              {/* Animated gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #8B5CF6, #6366F1, #A78BFA, #8B5CF6)",
                  padding: "3px",
                  borderRadius: "50%",
                }}
              />

              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
                  transform: "scale(1.2)",
                  filter: "blur(20px)",
                }}
              />

              {/* Profile image container */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden"
                style={{
                  border: "3px solid",
                  borderImage: "linear-gradient(135deg, #8B5CF6, #6366F1) 1",
                  borderRadius: "50%",
                  boxShadow: "0 0 60px rgba(139,92,246,0.5)",
                }}
              >
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ProfileAvatar name={personalInfo.name} />
                )}
              </div>

              {/* Floating decoration dots */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-purple-500"
              />
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -left-4 w-3 h-3 rounded-full bg-indigo-400 opacity-70"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-mono">scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
