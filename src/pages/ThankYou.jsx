import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 px-6 max-w-2xl mx-auto text-center min-h-[60vh] flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-white"
      >
        Thank You!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-slate-400 mb-10"
      >
        Thanks for filling the form. We will get back to you soon.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Button variant="primary" onClick={() => navigate('/')}>
          Back to Scholar Line
        </Button>
      </motion.div>
    </div>
  );
}
