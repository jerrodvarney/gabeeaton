import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      id="home-page"
      className="content-page"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div className="home-title-container">
        <h3>{'Hello, I\'m'}</h3>
        <h1>Gabriel Eaton</h1>
        <h2>Implementation & Data Solutions Engineer</h2>
      </div>
    </motion.div>
  );
}
