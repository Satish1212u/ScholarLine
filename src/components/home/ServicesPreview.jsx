import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, GraduationCap, FileCheck } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const services = [
  {
    icon: <BookOpen size={36} className="text-amber-500" />,
    title: 'Academic Writing',
    desc: 'Assignments, essays, reports, case studies & all academic writing solutions crafted to perfection.',
    link: '/services/academic-writing'
  },
  {
    icon: <PenTool size={36} className="text-amber-500" />,
    title: 'Research Paper',
    desc: 'High-quality research papers with proper citations, methodology, and professional structure.',
    link: '/services/research-paper'
  },
  {
    icon: <GraduationCap size={36} className="text-amber-500" />,
    title: 'Thesis & Dissertation',
    desc: 'Complete thesis/dissertation help including data analysis, literature review, and defense prep.',
    link: '/services/thesis-dissertation'
  },
  {
    icon: <FileCheck size={36} className="text-amber-500" />,
    title: 'Editing & Proofreading',
    desc: 'Grammar correction, plagiarism checking, rewriting and rigorous professional editing.',
    link: '/services/editing-proofreading'
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Premium Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            We help ambitious students and professionals achieve ultimate academic success through expertly crafted writing, deep research, and rigorous editing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <Card key={idx} delay={idx * 0.1} className="flex flex-col h-full group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {svc.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-500 transition-colors">{svc.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow">{svc.desc}</p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <Button to={svc.link} variant="glass" className="w-full text-sm">Read More</Button>
              </div>
            </Card>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button to="/services" variant="primary">View All Services</Button>
        </motion.div>
      </div>
    </section>
  );
}
