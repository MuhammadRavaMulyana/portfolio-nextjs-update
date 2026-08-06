"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { Briefcase, GraduationCap, Award, Code2 } from "lucide-react";
import Image from "next/image";

const timeline = [
  {
    year: "2026",
    title: "Bachelor of Computer Science",
    company: "BINUS University",
    description: "Graduated with a concentration in Software Engineering. Completed a final project titled Arenaku, a web-based sports court rental management system built using Next.js, TypeScript, and Tailwind CSS.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Software Engineer Intern",
    company: "PT Arkana Dwi Mutiara",
    description: "Developed and maintained company websites, redesigned the Cerita Moon website, built the Marufuku Jaya Buana website, and contributed to the Parentoday mobile application using Flutter and modern web technologies.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "Badminton Achievements",
    company: "BINUS Badminton Club",
    description: "Won 1st Place in Men's Singles (Members Cup 2024) and actively participated in sports and organizational activities while balancing academic and technical development.",
    icon: Award,
  },
  {
    year: "2022",
    title: "Started Computer Science",
    company: "BINUS University",
    description: "Began studying Computer Science with a focus on Software Engineering while building a strong foundation in programming, algorithms, databases, and web development.",
    icon: Briefcase,
  },
];

const stats = [
  { value: 4, label: "Projects Built" },
  { value: 12, label: "Months Internship" },
  { value: 4, suffix: "+", label: "Tech Stack" },
  { value: 100, suffix: "%", label: "Commitment" },
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
            <span className="gradient-text">building modern digital solutions</span>
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
              I&apos;m a{" "}
              <span className="text-text-primary font-medium">
                Fresh Graduate Software Engineer
              </span>{" "}
                with internship experience in web development. During my internship, I
                contributed to developing and maintaining web applications while gaining
                hands-on experience with modern technologies such as{" "}
                <span className="text-text-primary font-medium">
                  Next.js, React, Tailwind CSS, Flutter, and WordPress
                </span>
                .
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              I enjoy solving real-world problems through{" "}
              <span className="text-text-primary font-medium">
                clean and efficient code
              </span>
                . I'm always eager to learn new technologies, improve my technical skills,
                and collaborate with teams to build meaningful digital solutions.
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[360px] h-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                      <Image
                        src="/profile.jpg"
                        alt="Muhammad Rava Mulyana"
                        fill
                        priority
                        className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      />

                      {/* Overlay agar menyatu dengan tema gelap */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
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
