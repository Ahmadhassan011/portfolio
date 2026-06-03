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

export default function Contact() {
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
    <section id="contact" className="py-28 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Contact
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal direction="left" className="space-y-10">
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-md">
              Have a project in mind or just want to say hello? Fill out the form
              and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="flex gap-6 items-center">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="text-xl text-[var(--text-secondary)] hover:text-[var(--orange)] transition-colors"
                  aria-label={s.label}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>

            <div className="space-y-4">
              {[
                { label: "Email", value: "ahmadhassan6531@gmail.com" },
                { label: "Phone", value: "+92 310 653 1680" },
                { label: "Location", value: "Mianwali, PK" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 text-sm">
                  <span className="text-[var(--orange)] font-semibold min-w-[70px]">
                    {item.label}:
                  </span>
                  <span className="text-[var(--text-secondary)]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right">
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
        </div>
      </div>
    </section>
  );
}
