"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 border-t border-[var(--border)] relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--orange)]/3 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          <Reveal direction="left" className="md:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--orange)]/30 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500" />
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border)]">
                <img
                  src="/ahmadhassan.jpg"
                  alt="Ahmad Hassan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="md:col-span-3">
            <div className="space-y-6">
              <div>
                <span className="text-lg tracking-[0.12em] uppercase text-[var(--text-secondary)] font-medium">
                  About me
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mt-3 text-[var(--text-primary)]">
                  CS Student specializing in{" "}
                  <span className="text-[var(--orange)]">ML & Intelligent Systems</span>
                </h2>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl">
                Computer Science student at Namal University with a growing
                interest in Machine Learning and intelligent systems. Looking to
                deepen my understanding through real-world projects, collaborative
                environments, and continuous learning. Committed to turning
                curiosity into impactful solutions by combining strong foundational
                knowledge with hands-on experience.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--orange)] mb-3">
                    Education
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-2 border-[var(--border)] pl-4">
                      <p className="text-[var(--text-primary)] font-medium">
                        BS Computer Science
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Namal University, Mianwali &mdash; 2023 -- 2027
                      </p>
                    </div>
                    <div className="border-l-2 border-[var(--border)] pl-4">
                      <p className="text-[var(--text-primary)] font-medium">
                        FSc Pre-Engineering
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Daanish Higher Secondary School, Hasilpur &mdash; 2021 -- 2023
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--orange)] mb-3">
                    Experience
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-2 border-[var(--border)] pl-4">
                      <p className="text-[var(--text-primary)] font-medium">
                        Systems and Code Lead
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        Open Source Society, Namal &mdash; Aug 2025 -- Present
                      </p>
                    </div>
                    <div className="border-l-2 border-[var(--border)] pl-4">
                      <p className="text-[var(--text-primary)] font-medium">
                        Developer
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        AWS Cloud Club Namal &mdash; Dec 2026 -- Present
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--orange)] transition-colors group mt-4"
              >
                View my projects
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
