import React from 'react';
import { motion } from 'framer-motion';
import ServicesPreview from '../components/home/ServicesPreview';

export default function Services() {
  return (
    <div className="pt-24 pb-0">
      <div className="px-6 text-center max-w-4xl mx-auto mb-10 pt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Explore Our Expertise
        </motion.h1>
      </div>
      <ServicesPreview />
    </div>
  );
}
