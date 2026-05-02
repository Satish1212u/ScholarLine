import React from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, Network, BookMarked, ShieldCheck, BookOpenCheck, Clock, 
  Lightbulb, Library, Workflow, Database, LineChart, PenTool, 
  GraduationCap, BadgeCheck, Timer, Lock, RefreshCw, 
  FileText, UserCheck, Send 
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function ResearchPaper() {
  return (
    <div className="pt-24 pb-0 bg-slate-950 font-sans">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          {/* Left Side */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6">Expert Methodology & Analysis</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Research Paper <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Writing</span>
            </h1>
            <p className="text-xl text-amber-500 font-medium mb-6">
              High-quality research papers crafted to meet academic and publication standards.
            </p>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              We provide expert research paper writing services with in-depth analysis, proper citations, and publication-ready formatting.
            </p>
            <div className="flex gap-4">
              <Button to="/contact" variant="primary">Order Now</Button>
              <Button to="/pricing" variant="secondary">View Pricing</Button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 group">
              <div className="overflow-hidden rounded-xl h-full w-full">
                <img src="/reserch.png" alt="Research Paper Writing" className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Description Section (Glass Pane layout) */}
      <section className="py-20 px-6 max-w-6xl mx-auto -mt-16 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl"
        >
          <QuoteIcon className="mx-auto text-white/10 mb-6 w-16 h-16" />
          <p className="text-xl md:text-2xl leading-relaxed text-slate-200 font-light italic">
            "At ScholarLine, we offer professional research paper writing services tailored to meet the highest academic and publication standards. Our expert researchers ensure every paper is thoroughly researched, logically structured, and supported by credible sources."
          </p>
        </motion.div>
      </section>

      {/* 3. What You Get (Cards - 6 Grid Asymmetric) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What You Get</h2>
          <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { title: "Deep Research & Analysis", icon: <Microscope size={28} /> },
             { title: "Structured & Logical Writing", icon: <Network size={28} /> },
             { title: "Proper Referencing", icon: <BookMarked size={28} /> },
             { title: "Plagiarism-Free Work", icon: <ShieldCheck size={28} /> },
             { title: "Publication-Ready Format", icon: <BookOpenCheck size={28} /> },
             { title: "Timely Delivery", icon: <Clock size={28} /> }
           ].map((feature, i) => (
             <Card key={i} delay={i * 0.1} className="flex gap-6 items-start hover:border-blue-500/30 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">Comprehensive support matching exact formatting metrics and empirical logic criteria.</p>
                </div>
             </Card>
           ))}
        </div>
      </section>

      {/* 4. Services Included (Z-Pattern Layout) */}
      <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden px-6">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Services Included</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">A modular approach to conquering every phase of your research study.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:px-20">
            {[
              { title: "Topic Selection & Proposal Writing", desc: "Crafting a compelling hypothesis and securing advisor approval.", icon: <Lightbulb /> },
              { title: "Literature Review", desc: "Extending your theoretical framework using highly cited current sources.", icon: <Library /> },
              { title: "Research Methodology", desc: "Setting up ironclad qualitative or quantitative parameters.", icon: <Workflow /> },
              { title: "Data Collection & Analysis", desc: "Advanced gathering techniques and rigorous statistical breakdowns.", icon: <Database /> },
              { title: "Results Interpretation", desc: "Linking pure data to your core research thesis effectively.", icon: <LineChart /> },
              { title: "Final Writing & Editing", desc: "Publishing-tier prose, proofreading, and final formatting.", icon: <PenTool /> }
            ].map((svc, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 viewport={{ once: true }} 
                 transition={{ delay: (i % 2) * 0.2 }}
                 className={`flex items-center gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}
               >
                  <div className="w-16 h-16 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-amber-500 shadow-xl shrink-0">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
                    <p className="text-slate-400">{svc.desc}</p>
                  </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (Horizontal scroll / 5-col grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Why Scholars Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
             { title: "Expert Researchers", icon: <GraduationCap size={32} /> },
             { title: "100% Original Content", icon: <BadgeCheck size={32} /> },
             { title: "On-Time Delivery", icon: <Timer size={32} /> },
             { title: "Confidential Work", icon: <Lock size={32} /> },
             { title: "Unlimited Revisions", icon: <RefreshCw size={32} /> }
          ].map((item, i) => (
             <Card key={i} className="flex flex-col items-center justify-center py-10 group">
                <div className="text-slate-400 group-hover:text-amber-500 group-hover:-translate-y-2 transition-all duration-300 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-md font-bold text-white">{item.title}</h3>
             </Card>
          ))}
        </div>
      </section>

      {/* 6. Working Process (4 steps horizontal timeline) */}
      <section className="py-24 px-6 bg-slate-900 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-4xl font-bold text-white">The Path to Publication</h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-10 relative">
             <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-600/0" />
             {[
               { step: "01", title: "Submit Requirements", icon: <FileText size={28} /> },
               { step: "02", title: "Assign Expert", icon: <UserCheck size={28} /> },
               { step: "03", title: "Research & Writing", icon: <Microscope size={28} /> },
               { step: "04", title: "Delivery", icon: <Send size={28} /> }
             ].map((proc, i) => (
                <div key={i} className="flex-1 text-center relative z-10 group">
                   <div className="w-20 h-20 mx-auto bg-slate-950 border border-white/10 text-white rounded-2xl flex items-center justify-center mb-6 relative shadow-xl overflow-hidden group-hover:border-amber-500/50 transition-colors">
                      <div className="absolute inset-0 bg-blue-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <div className="relative z-10 group-hover:text-amber-500 transition-colors">{proc.icon}</div>
                   </div>
                   <span className="text-amber-500 font-bold mb-2 block text-sm tracking-wider">STEP {proc.step}</span>
                   <h3 className="text-lg font-bold text-white">{proc.title}</h3>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-6 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
         <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 p-12 md:p-16 rounded-[3rem] shadow-2xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Publish Your Research Paper?</h2>
            <p className="text-lg text-slate-300 mb-10">Get expert assistance and ensure your research meets the highest academic standards.</p>
            <Button to="/contact" variant="primary" className="!px-12 !py-5 text-lg shadow-[0_0_30px_rgba(79,70,229,0.3)]">Order Now</Button>
         </div>
      </section>
    </div>
  );
}

// Internal SVG Helper for Quotes
function QuoteIcon(props) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.017 21L16.41 14.594H10.511V3H21.489V14.594L19.096 21H14.017ZM3.017 21L5.41 14.594H-0.489V3H10.489V14.594L8.096 21H3.017Z" />
    </svg>
  );
}
