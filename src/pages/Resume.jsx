import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <motion.div
      id="resume-page"
      className="content-page"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <h1 className="page-title">Resume</h1>
    </motion.div>
  );
}
