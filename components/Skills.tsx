"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS / Vercel", level: 78 },
      { name: "Git / CI/CD", level: 90 },
      { name: "Figma", level: 85 },
    ],
  },
];

export default function Skills() {
  const { ref, isInView } = useInView<HTMLElement>(0.1);

  return (
    <section id="skills" ref={ref} className="relative px-6 md:px-8 py-32 md:py-40">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[3px] mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * ci, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={0.3 + ci * 0.1 + si * 0.08}
                    start={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  name, level, delay, start,
}: { name: string; level: number; delay: number; start: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (start) {
      const timer = setTimeout(() => setWidth(level), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [start, level, delay]);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text-primary">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={width > 0 ? { opacity: 1 } : {}}
          className="text-xs font-bold text-accent"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, #6366f1, #a855f7)`,
          }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg shadow-accent/50" />
        </motion.div>
      </div>
    </div>
  );
}
