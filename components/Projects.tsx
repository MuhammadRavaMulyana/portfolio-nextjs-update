"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projectsList = [
  {
    title: "Nexus Commerce",
    description: "Enterprise-grade e-commerce platform with real-time inventory, AI recommendations, and multi-currency payments.",
    tags: ["Next.js 14", "Stripe", "Prisma", "PostgreSQL", "Redis"],
    color: "#6366f1",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    stats: { users: "50K+", rating: "4.9" },
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "TaskFlow Pro",
    description: "Collaborative project management tool with real-time sync, Kanban boards, and team analytics dashboard.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind"],
    color: "#a855f7",
    gradient: "from-[#a855f7] to-[#ec4899]",
    stats: { users: "12K+", rating: "4.8" },
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Content Studio",
    description: "AI-powered content generation platform with custom templates, SEO optimization, and multi-language support.",
    tags: ["OpenAI", "Python", "FastAPI", "Next.js"],
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#f43f5e]",
    stats: { users: "8K+", rating: "4.7" },
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "DataViz Analytics",
    description: "Real-time analytics dashboard with interactive D3.js charts, custom reports, and automated data exports.",
    tags: ["D3.js", "Next.js", "PostgreSQL", "Docker"],
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
    stats: { users: "25K+", rating: "4.9" },
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  const { ref, isInView } = useInView<HTMLElement>(0.05);

  return (
    <section id="projects" ref={ref} className="relative px-6 md:px-8 py-32 md:py-40">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[3px] mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            A selection of my recent work across various industries and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title, description, tags, color, gradient, stats, github, live, index, isInView,
}: {
  title: string; description: string; tags: string[]; color: string;
  gradient: string; stats: { users: string; rating: string };
  github: string; live: string;
  index: number; isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative"
    >
      <div className="glass-card rounded-3xl overflow-hidden relative">
        {/* Header with gradient */}
        <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-40 h-40 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-8 -left-8 w-32 h-32 border border-white/10 rounded-full"
          />

          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
              <div className="flex gap-4 text-white/70 text-sm">
                <span>{stats.users} users</span>
                <span>★ {stats.rating}</span>
              </div>
            </div>
          </div>

          {/* Hover overlay with real links */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-text-secondary border border-white/[0.04] hover:border-accent/20 hover:text-accent transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom action — REAL clickable link */}
        <div className="px-6 pb-6">
          <motion.a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-2 transition-colors cursor-pointer"
          >
            View Project <ArrowUpRight size={14} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
