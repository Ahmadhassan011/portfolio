"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

interface ProjectData {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
}

const projects: ProjectData[] = [
  {
    title: "BioQuest",
    description: "AI-Driven Drug Discovery Platform",
    highlights: [
      "Multi-agent architecture with Generator, Evaluator, and Refiner agents working in an iterative discovery loop",
      "GNN-DTI model for binding affinity prediction, toxicity classifier, and VAE for novel molecule generation",
      "Hybrid generation combining RDKit evolutionary algorithms with VAE-based molecular generation",
      "Pareto multi-objective optimization balancing affinity, toxicity, QED, and synthetic accessibility",
      "Three interfaces: CLI, Streamlit web UI, and Python API for flexible interaction"
    ],
    tags: ["Python", "PyTorch", "Drug Discovery", "Multi-Agent", "GNN", "VAE", "Streamlit", "RDKit"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011/BioQuest",
    year: "2025",
  },
  {
    title: "Bayes Emotion Classifier",
    description: "Emotion Prediction from Behavioral Data",
    highlights: [
      "Custom Naive Bayes classifier built from first principles using core probability theory — computing prior probabilities and conditional likelihoods manually",
      "Dataset of 1000+ behavioral samples with features: age, gender, platform type, daily screen time, content generation frequency, likes, comments, and messages per day",
      "Extensive preprocessing: invalid record removal, numeric standardization, forward-filling missing values, label encoding of categorical features, and stratified train-test split",
      "Evaluated using accuracy, precision, recall, F1-score, and confusion matrix — achieved 85.4% accuracy on unseen test data",
      "Model serialized with joblib alongside label encoders for consistent predictions on new user profiles",
      "Built in collaboration with Shehr Bano as part of a Probability and Statistics course"
    ],
    tags: ["Python", "Jupyter", "Pandas", "NumPy", "Scikit-learn"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011/bayes-emotion-classifier",
    year: "2025",
  },
  {
    title: "RISC-V Processor",
    description: "Interactive Pipeline Visualizer",
    highlights: [
      "5-stage pipelined RISC-V processor supporting the complete RV32I base instruction set with IF, ID, EX, MEM, and WB stages",
      "Web-based simulation environment to load or write RISC-V assembly, step through execution, and observe pipeline stage transitions in real time",
      "Real-time display of registers, memory state, and control signals with data forwarding and hazard detection logic",
      "Two execution backends: hardware-level Verilog simulation using Icarus Verilog and a faster Python software model",
      "Flask-powered backend with HTML, CSS, and JavaScript frontend — includes example programs for arithmetic, branching, and memory operations",
      "Built in collaboration with Anam Fatima, Muhammad Gulfam Afzal, and Reeha Batool"
    ],
    tags: ["HTML/CSS", "JavaScript", "Verilog", "Python", "Flask", "Computer Architecture"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011/RISC-V-processor",
    year: "2025",
  },
  {
    title: "Smart City IoT",
    description: "IoT-Driven Network with QoS",
    highlights: [
      "IoT-driven smart city network designed in Cisco Packet Tracer with integrated monitoring and Quality of Service (QoS) protocols",
      "VLAN segmentation for Traffic Management, Healthcare, Fire Services, and Administrative Control to minimize broadcast congestion and enforce departmental isolation",
      "QoS policies that prioritize emergency data packets, ensuring responsive services under heavy load",
      "Router-on-a-Stick for Inter-VLAN communication, DHCP for automated address management, and ACL enforcement for administrative integrity",
      "Centralized HTTP-based dashboard and SNMP configurations for real-time visibility and automated alerts",
      "Built in collaboration with Rayan Badar under the guidance of Sir Shahzad Arif"
    ],
    tags: ["Cisco Packet Tracer", "SNMP", "VLAN", "QoS", "Networking"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2025",
  },
  {
    title: "Phonebook System",
    description: "AVL Tree-Based Data Management",
    highlights: [
      "AVL-tree-based phonebook with O(log n) insertion, deletion, and search operations",
      "Supports prefix search, call history tracking (most/recent/longest calls), and CSV persistence",
      "Modular C++ design with separate header and source files for maintainability"
    ],
    tags: ["C++", "AVL Trees", "Data Structures", "OOP"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011/balanced-phone-book",
    year: "2024",
  },
  {
    title: "AntFarm Simulation",
    description: "Software Design Patterns",
    highlights: [
      "Multi-agent ant colony simulation demonstrating Observer, Strategy, Factory, and State design patterns",
      "Models ant colony behavior including resource gathering, environmental interaction, and task allocation"
    ],
    tags: ["C++", "Design Patterns", "OOP", "Simulation"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ahmadhassan011/AntFarm-Simulation-using-Design-Patterns",
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
              className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--orange)]/50 hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="h-1.5 bg-[var(--orange)]" />

              <div className="p-6 flex-1 flex flex-col gap-3">
                <h3 className="text-2xl font-bold tracking-wide text-[var(--text-primary)] group-hover:text-[var(--orange)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-[var(--text-secondary)]/70 leading-relaxed line-clamp-2">
                  {project.highlights[0]}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected(project); }}
                    className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--orange)] transition-colors"
                  >
                    View Details &rarr;
                  </button>
                  {project.githubUrl !== "#" && (
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
                  )}
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
