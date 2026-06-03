"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ProjectData {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl shadow-2xl"
          >
            <div className="h-1.5 bg-[var(--orange)]" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white z-10"
              aria-label="Close modal"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="p-6 sm:p-8 space-y-6 pt-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {project.year} &middot; {project.description}
                  </p>
                </div>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                {project.fullDescription}
              </p>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--orange)]">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[var(--orange)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--orange-hover)] transition-colors"
                >
                  Live Preview
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View source on GitHub"
                  className="px-4 py-2.5 border border-[var(--border)] text-[var(--text-primary)] rounded-lg hover:border-[var(--orange)] hover:text-[var(--orange)] transition-colors flex items-center"
                >
                  <i className="fab fa-github text-lg" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
