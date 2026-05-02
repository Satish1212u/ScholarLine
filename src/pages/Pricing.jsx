import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-white text-center"
      >
        Transparent Pricing
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
         {[
           { tier: "Standard", price: "$15/page", desc: "Best for simple essays and short assignments." },
           { tier: "Premium", price: "$25/page", desc: "Ideal for research papers and standard theses." },
           { tier: "PhD Level", price: "$40/page", desc: "Rigorous PhD dissertations by elite researchers." }
         ].map((plan, i) => (
            <Card key={i} className="text-center flex flex-col items-center">
               <h3 className="text-2xl font-semibold text-white mb-2">{plan.tier}</h3>
               <p className="text-amber-500 font-bold text-4xl mb-4">{plan.price}</p>
               <p className="text-slate-400 mb-8">{plan.desc}</p>
               <Button to="/contact" variant={i === 1 ? 'primary' : 'secondary'} className="w-full mt-auto">Choose Plan</Button>
            </Card>
         ))}
      </div>
    </div>
  );
}
