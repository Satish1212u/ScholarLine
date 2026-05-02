import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, CheckCircle, FileText, Briefcase, BarChart, FileBox, Library, Compass, ShieldCheck, Award, Clock, RefreshCcw, FileSignature, Users, Star, Quote, CheckCircle2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function AcademicWriting() {
  return (
    <div className="pt-24 pb-0 bg-slate-950 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Academic Writing Services
            </h1>
            <p className="text-xl text-amber-500 font-medium mb-6">Custom Essays, Reports & Coursework</p>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              From short argumentative essays to comprehensive case studies. We craft highly researched, perfectly formatted, and strictly original content that aligns precisely with your university rubrics.
            </p>
            <div className="flex gap-4">
              <Button to="/contact" variant="primary">Order Now</Button>
              <Button to="/pricing" variant="secondary">View Pricing</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(30,111,251,0.15)] relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 to-transparent z-10 group-hover:opacity-50 transition-opacity duration-500" />
              <img src="/Academic.png" alt="Academic Writing" className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1. Detailed Description */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center border-b border-white/5">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-8">
          Excellence in Academic Guidance
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl leading-relaxed text-slate-300">
          At ScholarLine, we provide comprehensive academic writing services designed to help students and professionals achieve excellence in their academic journey. Our team of experienced writers delivers well-structured, thoroughly researched, and plagiarism-free content aligned with university standards.
        </motion.p>
      </section>

      {/* 2. Services Included */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services Included</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {[
            { title: "Essay Writing", desc: "Rigorous, argumentative, and perfectly structured essays.", icon: <FileText /> },
            { title: "Assignment Help", desc: "Custom solutions to complex university assignments and coursework.", icon: <Briefcase /> },
            { title: "Case Study Analysis", desc: "In-depth evaluations of specific scenarios aligned with your syllabus.", icon: <BarChart /> },
            { title: "Report Writing", desc: "Professional, data-backed reports for business and science.", icon: <FileBox /> },
            { title: "Literature Review", desc: "Comprehensive synthesis of existing research in your field.", icon: <Library /> },
            { title: "Research-Based Writing", desc: "In-vivo text engineered to support complex academic hypotheses.", icon: <Compass /> }
          ].map((item, i) => (
            <Card key={i} className="group hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Existing: What You Get Section */}
      <section className="py-24 relative overflow-hidden bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What You Get</h2>
            <p className="text-lg text-slate-400">Our comprehensive approach ensures every requirement is meticulously handled.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card delay={0.1} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-amber-500 mb-6">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Deep Subject Research</h3>
              <p className="text-slate-400">We analyze academic databases to back every claim with peer-reviewed authority.</p>
            </Card>
            <Card delay={0.2} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-amber-500 mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rubric Alignment</h3>
              <p className="text-slate-400">Every paragraph is mapped strictly against your professor's grading criteria.</p>
            </Card>
            <Card delay={0.3} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-amber-500 mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Flawless Formatting</h3>
              <p className="text-slate-400">APA, MLA, Harvard, or Chicago. Your citations will be 100% accurate.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "100% Original Content", icon: <ShieldCheck size={32} /> },
            { title: "Expert Writers", icon: <Award size={32} /> },
            { title: "On-Time Delivery", icon: <Clock size={32} /> },
            { title: "Unlimited Revisions", icon: <RefreshCcw size={32} /> }
          ].map((item, i) => (
            <Card key={i} className="text-center p-8 group flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="py-24 px-6 bg-slate-900 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Process</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-[2px] bg-white/5" />
            {[
              { step: "01", title: "Submit Requirements", icon: <FileSignature size={28} /> },
              { step: "02", title: "Expert Assignment", icon: <Users size={28} /> },
              { step: "03", title: "Review & Delivery", icon: <CheckCircle2 size={28} /> }
            ].map((proc, i) => (
              <div key={i} className="flex-1 text-center relative z-10">
                <div className="w-20 h-20 mx-auto bg-slate-950 border-4 border-amber-500 text-amber-500 rounded-full flex items-center justify-center mb-6 shadow-xl relative group">
                  {proc.icon}
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">{proc.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{proc.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Client Success</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden">
            <Quote className="absolute top-8 right-8 text-white/5" size={100} />
            <div className="flex text-amber-500 mb-4 relative z-10">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-500" />)}
            </div>
            <p className="text-slate-300 italic mb-6 relative z-10 leading-relaxed text-lg">
              "Finding ScholarLine was a game-changer. They strictly adhered to my complex university rubric and produced an argumentative essay that was utterly flawless. Highly recommended."
            </p>
            <div className="relative z-10">
              <h4 className="text-white font-bold">Satish Gupta</h4>
              <p className="text-slate-500 text-sm">Maharishi Dayanand University</p>
            </div>
          </Card>
          <Card className="relative overflow-hidden">
            <Quote className="absolute top-8 right-8 text-white/5" size={100} />
            <div className="flex text-amber-500 mb-4 relative z-10">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-500" />)}
            </div>
            <p className="text-slate-300 italic mb-6 relative z-10 leading-relaxed text-lg">
              "The literature review they wrote for my Master's assignment was outstanding. Perfect Harvard formatting, deeply researched, and zero plagiarism."
            </p>
            <div className="relative z-10">
              <h4 className="text-white font-bold">Vipul Bhatt</h4>
              <p className="text-slate-500 text-sm">Postgraduate Scholar</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5 text-center px-6">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-[0_0_40px_rgba(30,111,251,0.15)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Secure Your Grades Today</h2>
          <p className="text-lg text-slate-400 mb-8 relative z-10">Discuss your specific requirements with our academic experts right now.</p>
          <Button to="/contact" variant="primary" className="!px-10 !py-5 text-lg relative z-10">Let's Get Started</Button>
        </div>
      </section>
    </div>
  );
}
