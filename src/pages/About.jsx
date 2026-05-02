import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, BookOpen, PenTool, Database, GraduationCap, FileSignature, BarChart, Users, Zap, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function About() {
  return (
    <div className="font-sans bg-slate-950 pb-24">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="About Background" 
            className="w-full h-full object-cover opacity-10 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-500 font-medium mb-4 block">Welcome to Your Academic Future</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              About ScholarLine
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              ScholarLine is a professional academic writing support platform providing research guidance, thesis assistance, and editing services to help students achieve university-level success.
            </p>
            <Button to="/services" variant="primary">Explore Services</Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
             <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl max-w-sm">
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500 mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Trusted Academic Partner</h3>
                <p className="text-slate-400 leading-relaxed">
                  Helping scholars build a successful research journey with clarity and confidence.
                </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Thesis Writing Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ScholarLine – Thesis Writing Support Service
          </h2>
          <p className="text-xl text-amber-500 font-medium mb-8">Complete research journey support for postgraduate students and PhD scholars.</p>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed text-left md:text-center">
            <p>
              Navigating the rigorous demands of postgraduate and doctoral research can be overwhelming. ScholarLine is purposefully built to alleviate that burden. We specialize in providing end-to-end thesis writing and dissertation support, ensuring that every chapter—from your initial abstract to your final defense—meets the strict quality metrics demanded by elite universities worldwide.
            </p>
            <p>
              Our methodology relies on pairing you with subject-matter experts who understand empirical methodologies, critical literature analysis, and precise academic formatting. We go beyond mere proofreading; we help engineer airtight scholarly arguments that contribute genuinely original insight to your discipline.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. Feature Cards (3 boxes) */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "University Standard Work", desc: "Rigorous alignment with ivy-league grading rubrics and formatting rules.", icon: <GraduationCap size={40} /> },
             { title: "Academic Integrity", desc: "100% original, heavily researched content with zero plagiarism tolerance.", icon: <ShieldCheck size={40} /> },
             { title: "Timely Delivery", desc: "Strict adherence to your deadlines to ensure smooth and peaceful submissions.", icon: <Clock size={40} /> }
           ].map((feat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                 <Card className="text-center flex flex-col items-center h-full">
                    <div className="text-amber-500 mb-6">{feat.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                    <p className="text-slate-400">{feat.desc}</p>
                 </Card>
              </motion.div>
           ))}
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="py-24 px-6 relative border-t border-white/5 mt-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Research Support Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Thesis Writing Support", icon: <BookOpen /> },
              { title: "Research Paper Assistance", icon: <PenTool /> },
              { title: "Publication Support", icon: <Award /> },
              { title: "Synopsis Writing", icon: <FileSignature /> },
              { title: "Dissertation Assistance", icon: <CheckCircle2 /> },
              { title: "Data Analysis Support", icon: <Database /> }
            ].map((svc, i) => (
               <Card key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{svc.title}</h3>
               </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Expert Team Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Our Expert Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "PhD Researchers", icon: <GraduationCap size={32} /> },
             { title: "Academic Writers", icon: <PenTool size={32} /> },
             { title: "Data Analysts", icon: <BarChart size={32} /> },
             { title: "Editors", icon: <FileSignature size={32} /> }
           ].map((member, i) => (
             <Card key={i} hover={false} className="text-center py-10">
                <div className="mx-auto w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-6">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{member.title}</h3>
             </Card>
           ))}
        </div>
      </section>

      {/* 6. Working Process Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-900 border-y border-white/5">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto relative z-10">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-white">Our Working Process</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-white/10 z-0" />
              
              {[
                { step: "1", title: "You Share", desc: "Submit your university requirements, rubric, and research topic." },
                { step: "2", title: "We Guide", desc: "Our academic experts formulate, structure, and draft your paper." },
                { step: "3", title: "Final Ready", desc: "Receive your perfectly formatted, plagiarism-free final submission." }
              ].map((proc, i) => (
                 <div key={i} className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto bg-slate-950 border-4 border-amber-500 text-amber-500 rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                      {proc.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{proc.title}</h3>
                    <p className="text-slate-400">{proc.desc}</p>
                 </div>
              ))}
           </div>
         </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 px-6">
         <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20 rounded-[40px] p-12 md:p-16 text-center backdrop-blur-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Research Journey with ScholarLine
            </h2>
            <p className="text-lg text-slate-300 md:text-xl mb-10 max-w-2xl mx-auto">
              Don't leave your academic future to chance. Get professional, university-grade support today.
            </p>
            <Button to="/contact" variant="primary">Contact Now</Button>
         </div>
      </section>
    </div>
  );
}
