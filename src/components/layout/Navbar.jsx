import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const servicesOptions = [
  { name: 'Academic Writing', path: '/services/academic-writing' },
  { name: 'Research Paper Writing', path: '/services/research-paper' },
  { name: 'Thesis & Dissertation', path: '/services/thesis-dissertation' },
  { name: 'Editing & Proofreading', path: '/services/editing-proofreading' },
];

const showPricing = false; // Flag to easily toggle Pricing visibility

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white tracking-tight">
            Scholar<span className="text-accent text-amber-500">Line</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-200 hover:text-amber-500 transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium text-slate-200 hover:text-amber-500 transition-colors">About</Link>
            
            {/* Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-amber-500 transition-colors py-2 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl flex flex-col gap-1"
                  >
                    {servicesOptions.map((service, idx) => (
                      <Link 
                        key={idx} 
                        to={service.path}
                        className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {showPricing && <Link to="/pricing" className="text-sm font-medium text-slate-200 hover:text-amber-500 transition-colors">Pricing</Link>}
            <Link to="/samples" className="text-sm font-medium text-slate-200 hover:text-amber-500 transition-colors">Samples</Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-5">
            <Link 
              to="/contact" 
              className="hidden md:inline-flex px-7 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:scale-105"
            >
              Order Now
            </Link>

            <button 
              className="md:hidden text-white p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-slate-950 flex flex-col md:hidden overflow-y-auto"
          >
            {/* Mobile Header (in drawer) */}
            <div className="flex justify-between items-center p-6 border-b border-white/5">
                <Link to="/" className="text-2xl font-bold text-white tracking-tight">
                  Scholar<span className="text-amber-500">Line</span>
                </Link>
                <button className="p-2 text-white cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                   <X size={26} />
                </button>
            </div>

            <nav className="flex flex-col gap-2 p-6">
              <Link to="/" className="text-xl font-medium text-white p-3 hover:bg-white/5 rounded-xl">Home</Link>
              <Link to="/about" className="text-xl font-medium text-white p-3 hover:bg-white/5 rounded-xl">About</Link>
              
              <div className="flex flex-col">
                <button 
                  className="flex items-center justify-between w-full text-xl font-medium text-white p-3 hover:bg-white/5 rounded-xl cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Services
                  <ChevronDown size={20} className={dropdownOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-1 pl-4 mx-3 my-2 border-l border-white/10"
                    >
                      {servicesOptions.map((service, idx) => (
                        <Link key={idx} to={service.path} className="text-base text-slate-300 p-3 hover:bg-white/5 rounded-xl">
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {showPricing && <Link to="/pricing" className="text-xl font-medium text-white p-3 hover:bg-white/5 rounded-xl">Pricing</Link>}
              <Link to="/samples" className="text-xl font-medium text-white p-3 hover:bg-white/5 rounded-xl">Samples</Link>
            </nav>

            <div className="mt-auto p-6 border-t border-white/5">
                <Link 
                  to="/contact" 
                  className="flex justify-center w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                >
                  Get Started
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
