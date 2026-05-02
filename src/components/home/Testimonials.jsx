import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Card from '../ui/Card';

const testimonials = [
  {
    name: "Aman Sharma",
    role: "PhD, Academic Research Expert , Delhi",
    text: "ScholarLine fundamentally transformed my thesis. Their attention to detail, research depth, and perfect formatting exceeded all my expectations. Absolutely a premium service.",
    image: "/Aman Sharma.jpg"
  },
  {
    name: "Priya Patel",
    role: "Masters Student, Mumbai",
    text: "The editing team caught subtle logical errors that my own professors missed. My dissertation defense went flawlessly thanks to the rigorous proofreading they provided.",
    image: "/priya.jpg"
  },
  {
    name: "Rahul Verma",
    role: "Researcher, Bangalore",
    text: "Fast, confidential, and completely plagiarism-free. They helped me structure my IEEE research paper beautifully before publication. Highly recommended for serious academics.",
    image: "/Rahul Verma.jpg"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/5 to-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by the Best
          </motion.h2>
          <p className="text-lg text-slate-400">See what researchers and students are saying about our premium services.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card hover={false} className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border-white/20 p-10 md:p-16">
                <Quote className="absolute top-10 right-10 text-white/5" size={120} />

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-500/30 flex-shrink-0 shadow-xl">
                    <img src={testimonials[current].image} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-amber-500 text-amber-500" />)}
                    </div>
                    <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed mb-6 italic">
                      "{testimonials[current].text}"
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-white">{testimonials[current].name}</h4>
                      <span className="text-amber-500">{testimonials[current].role}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prevSlide} className="p-3 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-all text-white hover:scale-110 cursor-pointer">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-all text-white hover:scale-110 cursor-pointer">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
