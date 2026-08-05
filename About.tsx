"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { Briefcase, GraduationCap, Award, Code2 } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    description: "Leading development of enterprise SaaS platform serving 100K+ users",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    company: "Digital Agency",
    description: "Built 20+ client projects using React, Next.js, and Node.js",
    icon: Code2,
  },
  {
    year: "2021",
    title: "Frontend Developer",
    company: "Startup Studio",
    description: "Developed responsive web apps and design systems",
    icon: GraduationCap,
  },
  {
    year: "2019",
    title: "Computer Science Degree",
    company: "University",
    description: "Graduated with honors, specializing in web technologies",
    icon: Award,
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Years" },
  { value: 30, suffix: "+", label: "Clients" },
  { value: 99, suffix: "%", label: "Satisfaction" },
];

export default function About() {
  const { ref, isInView } = useInView<HTMLElement>(0.1);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="about" ref={ref} className="relative px-6 md:px-8 py-32 md:py-40">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[3px] mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Passionate about
            <br />
            <span className="gradient-text">building the future</span>
          </h2>
        </motion.div>

        {/* Bio + Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I'm a <span className="text-text-primary font-medium">creative full-stack developer</span> with over 5 years of experience
              building scalable web applications. My expertise spans from crafting pixel-perfect
              UIs to architecting robust backend systems.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              I believe great software is born at the intersection of 
              <span className="text-text-primary font-medium"> design and engineering</span>. Every project I take on is an opportunity
              to push boundaries and create something truly memorable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={0.4 + i * 0.1} start={isInView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-2 to-surface-3" />
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-accent/10 rounded-2xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-accent-2/10 rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center border border-accent/10">
                    <Code2 size={48} className="text-accent/60" />
                  </div>
                  <p className="text-text-muted text-sm">Your Photo Here</p>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px]" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-2/10 rounded-full blur-[60px]" />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            My <span className="gradient-text">Journey</span>
          </h3>

          <div ref={containerRef} className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/[0.06]">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-accent via-accent-2 to-accent-3"
              />
            </div>

            {timeline.map((item, i) => (
              <TimelineItem key={item.year} {...item} index={i} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  value, suffix, label, delay, start,
}: { value: number; suffix: string; label: string; delay: number; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.2)" }}
      className="text-center p-4 rounded-xl glass-card"
    >
      <div className="text-xl md:text-2xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs text-text-muted mt-1">{label}</div>
    </motion.div>
  );
}

function TimelineItem({
  year, title, company, description, icon: Icon, index, isInView,
}: {
  year: string; title: string; company: string; description: string;
  icon: React.ElementType; index: number; isInView: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
        <div className={`glass-card p-6 rounded-2xl inline-block ${isLeft ? "md:ml-auto" : ""}`}>
          <span className="text-accent text-sm font-semibold">{year}</span>
          <h4 className="text-lg font-semibold mt-1">{title}</h4>
          <p className="text-accent-2 text-sm font-medium">{company}</p>
          <p className="text-text-secondary text-sm mt-2">{description}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-12 h-12 rounded-full glass flex items-center justify-center border border-accent/20"
        >
          <Icon size={18} className="text-accent" />
        </motion.div>
      </div>

      {/* Spacer for other side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
