import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Clock, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function WhyChooseUs() {
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-slate-900 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Trusted by Thousands Globally?
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            We don't just write papers; we engineer academic success. With a strict policy on originality and a team of vetted PhD researchers, your success is mathematically guaranteed.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              { text: "100% Original, Plagiarism-Free Content", icon: <ShieldCheck className="text-amber-500 mr-3" /> },
              { text: "Strict Adherence to Deadlines (99% On-time)", icon: <Clock className="text-amber-500 mr-3" /> },
              { text: "Top-Tier PhD & Masters Level Writers", icon: <Award className="text-amber-500 mr-3" /> },
              { text: "Free Unlimited Revisions until Guaranteed Satisfaction", icon: <CheckCircle2 className="text-amber-500 mr-3" /> },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center text-slate-300 text-lg">
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Button to="/contact" variant="primary">Get Started Today</Button>
          </div>
        </motion.div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div variants={statVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8">
             <Card className="text-center p-6 bg-slate-950/50">
                <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                <p className="text-slate-400 font-medium">Active Support</p>
             </Card>
          </motion.div>
          <motion.div variants={statVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
             <Card className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-900 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Award size={80} /></div>
                <h3 className="text-4xl font-bold text-amber-500 mb-2 relative z-10">4.9/5</h3>
                <p className="text-slate-400 font-medium relative z-10">Average Rating</p>
             </Card>
          </motion.div>
          <motion.div variants={statVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-8">
             <Card className="text-center p-6 bg-slate-950/50">
                <h3 className="text-4xl font-bold text-white mb-2">99%</h3>
                <p className="text-slate-400 font-medium">On-Time Delivery</p>
             </Card>
          </motion.div>
          <motion.div variants={statVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>
             <Card className="text-center p-6 bg-slate-950/50">
                <h3 className="text-4xl font-bold text-blue-500 mb-2">12K+</h3>
                <p className="text-slate-400 font-medium">Orders Completed</p>
             </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
