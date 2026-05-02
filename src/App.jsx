import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WelcomePopup from './components/ui/WelcomePopup';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AcademicWriting from './pages/services/AcademicWriting';
import ResearchPaper from './pages/services/ResearchPaper';
import Thesis from './pages/services/Thesis';
import Editing from './pages/services/Editing';
import Pricing from './pages/Pricing';
import Samples from './pages/Samples';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const showPricing = false; // Flag to easily toggle Pricing visibility

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-500">
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow w-full overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/academic-writing" element={<AcademicWriting />} />
            <Route path="/services/research-paper" element={<ResearchPaper />} />
            <Route path="/services/thesis-dissertation" element={<Thesis />} />
            <Route path="/services/editing-proofreading" element={<Editing />} />
            <Route path="/pricing" element={showPricing ? <Pricing /> : <Navigate to="/" replace />} />
            <Route path="/samples" element={<Samples />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>

        <Footer />
        <WelcomePopup />
      </div>
    </Router>
  );
}

export default App;
