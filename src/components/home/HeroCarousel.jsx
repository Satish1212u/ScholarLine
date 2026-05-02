import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    headline: 'Premium Academic Writing Services',
    subheading: 'Elevate your research and academic performance with our expert guidance and 100% plagiarism-free content.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    headline: 'Master Your Thesis & Dissertation',
    subheading: 'Comprehensive support from methodology to finalizing your defense. Your academic success is our top priority.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    headline: 'Professional Editing & Proofreading',
    subheading: 'Flawless grammar, perfect formatting, and rigorous plagiarism checks for submission-ready research papers.',
  }
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-[100dvh] min-h-[650px] overflow-hidden bg-slate-950 font-sans">
      <AnimatePresence initial={false}>
        <motion.div
           key={current}
           className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
           drag="x"
           dragConstraints={{ left: 0, right: 0 }}
           dragElastic={1}
           onDragEnd={(e, { offset, velocity }) => {
             const swipe = swipePower(offset.x, velocity.x);
             if (swipe < -swipeConfidenceThreshold) nextSlide();
             else if (swipe > swipeConfidenceThreshold) prevSlide();
           }}
        >
           <div 
             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: `url(${slides[current].image})` }}
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center pointer-events-none mt-10">
         <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl pointer-events-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-5">
                {slides[current].headline}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 font-light mb-8 leading-relaxed">
                {slides[current].subheading}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <Button to="/contact" variant="primary">Order Now</Button>
                 <Button to="/services" variant="secondary">View Services</Button>
              </div>
            </motion.div>
         </AnimatePresence>
      </div>

      <div className="absolute right-6 bottom-8 md:bottom-auto md:right-12 md:top-1/2 md:-translate-y-1/2 flex md:flex-col gap-3 z-20">
         <button 
           onClick={prevSlide}
           className="p-3 md:p-4 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-xl border border-white/10 text-white transition-all hover:scale-110 flex items-center justify-center group"
           aria-label="Previous slide"
         >
           <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
         </button>
         <button 
           onClick={nextSlide}
           className="p-3 md:p-4 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-xl border border-white/10 text-white transition-all hover:scale-110 flex items-center justify-center group"
           aria-label="Next slide"
         >
           <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
         </button>
      </div>

      <div className="absolute bottom-8 left-6 lg:left-12 flex gap-3 z-20">
         {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                idx === current 
                  ? 'w-10 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]' 
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
            />
         ))}
      </div>
    </section>
  );
}
