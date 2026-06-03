"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const socials = [
  { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/in/ahmad-h01" },
  { icon: "fab fa-github", label: "GitHub", href: "https://github.com/Ahmadhassan011" },
  { icon: "fas fa-envelope", label: "Email", href: "mailto:ahmadhassan6531@gmail.com" },
];

const fields = [
  { label: "Name", name: "name", type: "text", placeholder: "Your Full Name" },
  { label: "Email Address", name: "email", type: "email", placeholder: "Your Email Address" },
  { label: "Phone Number", name: "phone", type: "tel", placeholder: "Your Phone Number" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function Contact() {
  const showForm = false; // toggle to true to re-enable contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const underlineClass = (field: string) => {
    const hasValue = formData[field as keyof typeof formData].length > 0;
    const isFocused = focused === field;
    return `w-full bg-transparent border-0 border-b outline-none p-0 pb-2 text-sm text-white placeholder:text-white/40 transition-all duration-300 ${
      isFocused
        ? "border-white"
        : hasValue
          ? "border-white/50"
          : "border-white/30"
    }`;
  };

  return (
    <section id="contact" className="py-28 border-t border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--orange)]/3 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--orange)] mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              Let&apos;s work<br className="sm:hidden" /> together
            </h2>
            <div className="w-16 h-1 bg-[var(--orange)] mx-auto mt-6 rounded-full" />
          </div>
        </Reveal>

        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-12 max-w-lg mx-auto"
          >
            <motion.p variants={itemVariants} className="text-[var(--text-secondary)] leading-relaxed text-base">
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)]">
                Available for opportunities
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center gap-8">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-2 group"
                  aria-label={s.label}
                >
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] group-hover:text-[var(--orange)] group-hover:border-[var(--orange)] transition-all duration-300">
                    <i className={`${s.icon} text-lg`} />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--orange)] transition-colors">
                    {s.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>


          </motion.div>

          {showForm && (
            <Reveal direction="right" className="mt-16 w-full max-w-xl mx-auto">
              <motion.form
                onSubmit={handleSubmit}
                className="bg-[var(--orange)] p-10 sm:p-12 rounded-2xl text-white space-y-10"
              >
                {fields.map((field) => (
                  <div key={field.name} className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-80">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      placeholder={field.placeholder}
                      className={underlineClass(field.name)}
                      required
                    />
                  </div>
                ))}

                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-80">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Type Your Message..."
                    rows={3}
                    className={`${underlineClass("message")} resize-none`}
                    required
                  />
                </div>

                <div className="flex items-center justify-end gap-4 pt-2">
                  {submitted && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm font-medium"
                    >
                      ✓ Message sent!
                    </motion.span>
                  )}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white text-black px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#f0f0f0] transition-colors"
                  >
                    Send message
                  </motion.button>
                </div>
              </motion.form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
