"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const titleWords = ["Crafting", "Digital", "Experiences"];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      {/* Decorative floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full bg-accent/5 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-accent-2/5 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[25%] w-48 h-48 rounded-full bg-accent-3/5 blur-[80px]"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass text-sm font-medium text-accent border border-accent/10">
            <Sparkles size={14} className="text-accent-2" />
            <span className="relative">
              Fresh Graduate Software Engineer
              <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </span>
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="mb-6 overflow-hidden">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 80, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-4 md:mr-6"
                style={{ perspective: 1000 }}
              >
                {i === 1 ? (
                  <span className="gradient-text-animated">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I'm a <span className="text-text-primary font-medium">creative developer</span> who transforms
          ideas into immersive digital realities. Specializing in modern web technologies
          with a focus on performance and aesthetics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(99,102,241,0.25)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent via-accent-2 to-accent-3 text-white font-semibold text-sm md:text-base shadow-xl shadow-accent/20 relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-3 via-accent-2 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl glass text-white font-semibold text-sm md:text-base hover:bg-white/[0.08] transition-colors border border-white/[0.06]"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-white/[0.04]"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[11px] text-text-muted uppercase tracking-[3px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
