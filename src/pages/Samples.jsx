import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

export default function Samples() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-white text-center"
      >
        Our Recent Work
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
         {[
           { title: "Machine Learning in Healthcare", type: "Research Paper", pages: "15 Pages | IEEE Format" },
           { title: "Impact of Microeconomics on Startups", type: "Case Study", pages: "10 Pages | APA Format" },
           { title: "Cybersecurity Protocol Analysis", type: "Master's Thesis", pages: "65 Pages | Harvard Format" },
           { title: "Shakespearean Literature Deep Dive", type: "Critical Essay", pages: "8 Pages | MLA Format" }
         ].map((sample, i) => (
            <Card key={i} className="flex flex-col">
               <span className="text-amber-500 font-medium mb-2 text-sm">{sample.type}</span>
               <h3 className="text-2xl font-semibold text-white mb-4">{sample.title}</h3>
               <p className="text-slate-400 mb-6">{sample.pages}</p>
               <button className="text-blue-500 hover:text-blue-400 font-semibold text-left transition-colors mt-auto">
                 Download Sample PDF &rarr;
               </button>
            </Card>
         ))}
      </div>
    </div>
  );
}
