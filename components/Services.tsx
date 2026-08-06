"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  Globe, Smartphone, Palette, Database, Zap, Shield,
} from "lucide-react";

const servicesList = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive, scalable, and SEO-friendly web applications using Next.js, React, and modern web technologies. Experienced in developing business websites from concept to deployment.",
    color: "#6366f1",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with Flutter, integrating APIs, and creating responsive user experiences for Android and iOS.",
    color: "#a855f7",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Transforming UI/UX designs into responsive and user-friendly interfaces while improving usability, accessibility, and overall user experience.",
    color: "#ec4899",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Developing RESTful APIs, managing databases, implementing authentication, and integrating third-party services such as payment gateways.",
    color: "#8b5cf6",
  },
  {
    icon: Zap,
    title: "Database & System Architecture",
    description: "Designing efficient database structures and scalable system architectures, including multi-tenant applications and real-time booking systems.",
    color: "#6366f1",
  },
  {
    icon: Shield,
    title: "Website Maintenance",
    description: "Maintaining and optimizing websites through bug fixing, performance improvements, content updates, and continuous system enhancements.",
    color: "#a855f7",
  },
];

export default function Services() {
  const { ref, isInView } = useInView<HTMLElement>(0.1);

  return (
    <section id="services" ref={ref} className="relative px-6 md:px-8 py-32 md:py-40">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[3px] mb-4">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            From concept to deployment, I provide end-to-end solutions for your digital needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon, title, description, color, index, isInView,
}: {
  icon: React.ElementType; title: string; description: string; color: string;
  index: number; isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative glass-card rounded-2xl p-8 overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${color}10, transparent 60%)`,
        }}
      />

      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative"
        style={{ background: `${color}15` }}
      >
        <Icon size={26} style={{ color }} />
      </motion.div>

      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
