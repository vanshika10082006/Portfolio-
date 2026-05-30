import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  FaEnvelope, FaLinkedinIn, FaGithub, FaPhone, FaPaperPlane
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const contactLinks = [
  {
    icon: <FaEnvelope size={18} />,
    label: "Email",
    value: "vanshikagorwal10@gmail.com",
    href: `mailto:${personalInfo.email}`,
    color: "#8B5CF6",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/vanshika-porwal",
    href: personalInfo.linkedin,
    color: "#0077B5",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    value: "github.com/vanshika10082006",
    href: personalInfo.github,
    color: "#ffffff",
  },
  {
    icon: <FaPhone size={18} />,
    label: "Phone",
    value: "+91 1234567890",
    href: `tel:${personalInfo.phone}`,
    color: "#10B981",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // For demo: shows a success state. Replace with actual email API (EmailJS, Formspree, etc.)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-['Syne'] text-4xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="section-underline" />
        </motion.div>

        {/* Contact info row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactLinks.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-card p-5 flex flex-col items-center gap-3 text-center group cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: `${c.color}20`, border: `1px solid ${c.color}30`, color: c.color }}
              >
                {c.icon}
              </div>
              <div>
                <p className="text-white/40 text-xs font-mono mb-1">{c.label}</p>
                <p className="text-white text-xs font-medium break-all">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-8 lg:p-10 max-w-2xl mx-auto"
        >
          <h3 className="font-['Syne'] text-xl font-bold text-white mb-6 text-center">
            Send me a message
          </h3>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <FaPaperPlane className="text-green-400" size={20} />
              </div>
              <p className="text-green-400 font-semibold font-['Syne'] text-lg">Message Sent!</p>
              <p className="text-white/40 text-sm mt-1">I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/40 text-xs font-mono uppercase tracking-wider mb-2 block">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Vanshika Porwal"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs font-mono uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/40 text-xs font-mono uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hi Vanshika, I'd love to work with you..."
                  required
                  className="form-input resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <FaPaperPlane size={14} />
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
