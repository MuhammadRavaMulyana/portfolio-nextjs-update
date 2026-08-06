"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.04] px-6 md:px-8 py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="text-xl font-bold gradient-text mb-2">Muhammad Rava Mulyana</div>
            <p className="text-sm text-text-muted">
              Building modern, responsive, and user-friendly web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-text-muted"
          >
            <span>Made with</span>
            <span>Designed & Built by Muhammad Rava Mulyana</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/[0.04] text-center"
        >
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Muhammad Rava Mulyana. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
