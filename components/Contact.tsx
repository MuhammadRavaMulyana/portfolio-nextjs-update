"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import {
  Mail, Linkedin, Github, Twitter, Send, Check, MapPin, Phone,
  Instagram,
} from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", value: "github.com/username", href: "https://github.com/MuhammadRavaMulyana" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/username", href: "https://www.linkedin.com/in/muhammadravamulyana/" },
  { icon: Instagram, label: "Instagram", value: "@username", href: "https://instagram.com/Muhammadrava_29" },
];

export default function Contact() {
  const { ref, isInView } = useInView<HTMLElement>(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative px-6 md:px-8 py-32 md:py-40">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[3px] mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            I&apos;m currently seeking full-time opportunities as a Software Engineer. I&apos;m also open to internships and collaborations. Feel free to reach out through the contact form or connect with me via email or LinkedIn.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-text-secondary leading-relaxed">
                I&apos;m currently seeking full-time opportunities as a Software Engineer. Feel free to reach out via email, LinkedIn, or the contact form. I'd be happy to connect and discuss opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <ContactItem icon={Mail} label="Email" value="ravam7209@gmail.com" href="mailto:ravam7209@gmail.com" />
              <ContactItem icon={Phone} label="Phone" value="+62 81399383437" href="tel:+6281399383437" />
              <ContactItem icon={MapPin} label="Location" value="DKI Jakarta, Indonesia" />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                Social Links
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
                    title={link.label}
                  >
                    <link.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card rounded-2xl p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me how I can help you..."
                required
                rows={5}
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={submitted}
              whileHover={{ y: -2, boxShadow: "0 20px 40px rgba(99,102,241,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className={`w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm transition-all ${
                submitted
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-accent via-accent-2 to-accent-3 text-white shadow-lg shadow-accent/20"
              }`}
            >
              {submitted ? (
                <>
                  <Check size={18} /> Message Sent Successfully!
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon, label, value, href,
}: { icon: React.ElementType; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl glass flex items-center justify-center shrink-0">
        <Icon size={18} className="text-accent" />
      </div>
      <div>
        <div className="text-xs text-text-muted">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block hover:opacity-80 transition-opacity cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return content;
}
