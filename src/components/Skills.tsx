"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

interface SkillItem {
  icon: string;
  name: string;
}

interface SkillGroup {
  category: string;
  items: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { icon: "devicon-c-plain", name: "C" },
      { icon: "devicon-cplusplus-plain", name: "C++" },
      { icon: "devicon-python-plain", name: "Python" },
      { icon: "devicon-typescript-original", name: "TypeScript" },
      { icon: "devicon-javascript-plain", name: "JavaScript" },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { icon: "devicon-pytorch-original", name: "PyTorch" },
      { icon: "devicon-scikitlearn-plain", name: "Scikit-learn" },
      { icon: "devicon-numpy-plain", name: "NumPy" },
      { icon: "devicon-pandas-plain", name: "Pandas" },
      { icon: "devicon-matplotlib-plain", name: "Matplotlib" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { icon: "devicon-nextjs-plain", name: "Next.js" },
      { icon: "devicon-express-original", name: "Express.js" },
      { icon: "devicon-fastapi-plain", name: "FastAPI" },
      { icon: "devicon-flask-original", name: "Flask" },
      { icon: "devicon-django-plain", name: "Django" },
      { icon: "devicon-html5-plain", name: "HTML5" },
      { icon: "devicon-css3-plain", name: "CSS3" },
    ],
  },
  {
    category: "Databases",
    items: [
      { icon: "devicon-mysql-original", name: "MySQL" },
      { icon: "devicon-postgresql-plain", name: "PostgreSQL" },
      { icon: "devicon-mongodb-plain", name: "MongoDB" },
      { icon: "devicon-oracle-original", name: "Oracle" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { icon: "devicon-azure-plain", name: "Azure" },
      { icon: "devicon-git-plain", name: "Git" },
      { icon: "devicon-docker-plain", name: "Docker" },
      { icon: "devicon-jenkins-plain", name: "Jenkins" },
      { icon: "devicon-githubactions-plain", name: "GitHub Actions" },
    ],
  },
  {
    category: "Tools",
    items: [
      { icon: "devicon-vscode-plain", name: "VS Code" },
      { icon: "devicon-androidstudio-plain", name: "Android Studio" },
      { icon: "devicon-jupyter-plain", name: "Jupyter" },
      { icon: "devicon-figma-plain", name: "Figma" },
      { icon: "devicon-selenium-original", name: "Selenium" },
      { icon: "devicon-linux-plain", name: "Linux" },
      { icon: "devicon-bash-plain", name: "Bash" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[var(--bg-skills)] text-center">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">
            Technical Skills
          </h2>
          <p className="text-[var(--text-secondary)] text-sm max-w-xl mx-auto mb-16">
            Technologies and tools I work with across the full stack and machine learning
          </p>
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={groupVariants}
              className="bg-[var(--bg-secondary)]/50 border border-[var(--border)] rounded-xl p-6"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--orange)] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap items-center gap-5">
                {group.items.map((skill, i) => (
                  <i
                    key={i}
                    title={skill.name}
                    className={`${skill.icon} colored text-2xl`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
