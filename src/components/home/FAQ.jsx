import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const emptyFaqs = [
  {
    q: "Do you guarantee completely plagiarism-free work?",
    a: "Absolutely. Every single paper is written from scratch by our subject-matter experts and undergoes rigorous plagiarism checks using industry-leading software like Turnitin before delivery."
  },
  {
    q: "Can I get direct updates on my ongoing research paper?",
    a: "Yes! We believe in transparent communication. You will have direct access to our support portal where you can request drafts and get updates on your project's progress."
  },
  {
    q: "What if I need revisions after the final delivery?",
    a: "We offer completely free, unlimited revisions within the first 14 days of delivery. If something doesn't align entirely with your initial requirements, we will fix it immediately."
  },
  {
    q: "Are my personal details and payment information secure?",
    a: "100% secure. We maintain strict confidentiality and utilize bank-level 256-bit encryption for all payments. We never share your details with third parties."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-lg text-slate-400">Everything you need to know about our premium writing process.</p>
        </div>

        <div className="space-y-4">
          {emptyFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/5 border-amber-500/30' : 'bg-transparent hover:bg-white/5'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left px-6 py-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-amber-500' : 'text-slate-200'}`}>
                    {faq.q}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-amber-500 text-slate-900' : 'bg-white/10 text-white'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed border-t border-white/5 mx-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
