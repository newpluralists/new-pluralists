import React from 'react';
import { motion } from 'motion/react';

const FadeIn = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '100% 0px -300px 0px' }}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
