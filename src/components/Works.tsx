"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

interface ProjectData {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
}

const projects: ProjectData[] = [
  {
    title: "BioQuest",
    description: "AI-Driven Drug Discovery Platform",
    fullDescription:
      "Built a multi-agent drug discovery system for molecular optimization. Implemented GNN, LSTM, and VAE models for molecular property prediction and generation. Applied Pareto optimization for navigating trade-offs between multiple molecular properties. The platform integrates Streamlit for interactive visualization of results.",
    tags: ["Python", "PyTorch", "Streamlit", "GNN", "LSTM", "VAE"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011",
    year: "2025",
  },
  {
    title: "Bayes Emotion Classifier",
    description: "Social Media Emotion Prediction",
    fullDescription:
      "Developed a custom Naive Bayes classifier to predict emotions from social media data. Performed comprehensive text preprocessing including tokenization, stop-word removal, and feature extraction using TF-IDF. Achieved 85.4% accuracy on benchmark datasets with efficient training and inference.",
    tags: ["Python", "Jupyter", "NLP", "Scikit-learn", "Pandas"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011",
    year: "2025",
  },
  {
    title: "RISC-V Processor",
    description: "5-Stage Pipelined Architecture",
    fullDescription:
      "Architected a 5-stage pipelined RISC-V processor with full forwarding and hazard detection logic. Implemented in Verilog with a comprehensive coverage-driven testbench. Analyzed pipeline stalls, data hazards, and control hazards using GTKWave waveform analysis to verify correctness.",
    tags: ["Verilog", "GTKWave", "Computer Architecture", "HDL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011",
    year: "2025",
  },
  {
    title: "Smart City IoT",
    description: "Three-Layer Hierarchical Network",
    fullDescription:
      "Designed a smart city network using a three-layer hierarchical architecture in Cisco Packet Tracer. Implemented inter-VLAN routing, 802.1Q trunking, and departmental segmentation for secure communication. Deployed SNMP-based monitoring for real-time network health tracking and alerting.",
    tags: ["Cisco Packet Tracer", "SNMP", "VLAN", "Networking"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011",
    year: "2025",
  },
  {
    title: "Phonebook System",
    description: "AVL Tree-Based Data Management",
    fullDescription:
      "Developed a phonebook management system using AVL trees for efficient data operations. Enabled fast insertion, deletion, and search through a structured console interface. Designed a modular and scalable data structure implementation ensuring O(log n) performance across all operations.",
    tags: ["C++", "AVL Trees", "Data Structures", "OOP"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011",
    year: "2024",
  },
  {
    title: "AntFarm Simulation",
    description: "Software Design Patterns in C++",
    fullDescription:
      "Simulation project demonstrating the use of various software design patterns in a complex multi-agent environment. Implemented observer, strategy, factory, and state patterns to model ant colony behavior, resource gathering, and environmental interactions.",
    tags: ["C++", "Design Patterns", "OOP", "Simulation"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011",
    year: "2024",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function Works() {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  return (
    <section id="works" className="py-28 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-16">
            Projects
          </h2>
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              onClick={() => setSelected(project)}
              className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--orange)]/50 transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="h-1.5 bg-[var(--orange)]" />

              <div className="p-6 flex-1 flex flex-col gap-4">
                <h3 className="text-2xl font-bold tracking-wide text-[var(--text-primary)] group-hover:text-[var(--orange)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected(project); }}
                    className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--orange)] transition-colors"
                  >
                    View Details &rarr;
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--orange)] transition-colors"
                    aria-label="View source on GitHub"
                  >
                    <i className="fab fa-github text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
