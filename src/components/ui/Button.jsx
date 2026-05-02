import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({ children, to, variant = 'primary', className = '', ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 pointer-events-auto transform";
  
  const variants = {
    primary: "px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.35)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]",
    secondary: "px-8 py-4 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10",
    outline: "px-8 py-4 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900",
    glass: "px-6 py-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg rounded-xl border border-white/20"
  };

  const Content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );

  return to ? <Link to={to}>{Content}</Link> : Content;
}
