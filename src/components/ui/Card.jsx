import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -10 } : {}}
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
