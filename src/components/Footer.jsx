import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="font-['Syne'] text-lg font-bold text-white">
            Vanshika<span className="text-purple-400">.</span>
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-sm">
            © 2024 Vanshika Porwal. All rights reserved.
          </p>

          {/* Social + Scroll Top */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FaGithub size={15} />, href: personalInfo.github },
              { icon: <FaLinkedinIn size={15} />, href: personalInfo.linkedin },
              { icon: <FaEnvelope size={15} />, href: `mailto:${personalInfo.email}` },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-purple-500/50 transition-all duration-300"
              >
                {s.icon}
              </motion.a>
            ))}

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white ml-2"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #6366F1)" }}
            >
              <FaArrowUp size={12} />
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
}
