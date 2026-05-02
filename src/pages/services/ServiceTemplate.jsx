import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function ServiceTemplate({ 
  title, 
  subtitle, 
  description, 
  image, 
  features 
}) {
  return (
    <div className="pt-24 pb-0 bg-slate-950 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-amber-500 font-medium mb-6">
              {subtitle}
            </p>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              {description}
            </p>
            <div className="flex gap-4">
              <Button to="/contact" variant="primary">Order Now</Button>
              <Button to="/pricing" variant="secondary">View Pricing</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(30,111,251,0.15)] relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 to-transparent z-10 group-hover:opacity-50 transition-opacity duration-500" />
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What You Get</h2>
            <p className="text-lg text-slate-400">Our comprehensive approach ensures every requirement is meticulously handled.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} delay={idx * 0.1} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-amber-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5 text-center px-6">
         <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ace Your Project?</h2>
            <p className="text-lg text-slate-400 mb-8">Discuss your specific requirements with our academic experts today.</p>
            <Button to="/contact" variant="primary" className="!px-10 !py-5 text-lg">Start Your Order Now</Button>
         </div>
      </section>
    </div>
  );
}
