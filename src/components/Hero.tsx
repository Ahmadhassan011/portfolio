"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["CS Student", "ML Engineer", "Full Stack Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--orange)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--orange)]/3 rounded-full blur-[100px]" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[var(--orange)]" />
            <span className="text-sm tracking-widest uppercase text-[var(--text-secondary)] font-medium">
              Hello
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-bold leading-[0.9] tracking-tight text-[var(--text-primary)]"
          >
            I&apos;m Ahmad
            <br />
            <span className="text-[var(--orange)]">Hassan</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="h-8">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-lg text-[var(--text-secondary)] font-medium inline-block"
            >
              {roles[roleIndex]}
            </motion.span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[var(--text-secondary)] leading-relaxed max-w-md text-lg"
          >
            Building Machine Learning and intelligent systems.
            Turning curiosity into impactful solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            <a
              href="#works"
              className="px-8 py-3 bg-[var(--orange)] text-white font-semibold rounded-lg hover:bg-[var(--orange-hover)] transition-all duration-300 shadow-lg shadow-[var(--orange)]/25"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-[var(--border)] text-[var(--text-primary)] font-semibold rounded-lg hover:border-[var(--orange)] hover:text-[var(--orange)] transition-all duration-300"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <motion.img
              src="/hero-image.png"
              alt="Ahmad Hassan"
              className="w-full h-auto relative grayscale hover:grayscale-0 contrast-[1.1] brightness-[1.05] transition-all duration-700 hero-img"
              style={{
                maskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 80%)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
