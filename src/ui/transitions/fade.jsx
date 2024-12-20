import React from 'react';
import { motion } from 'motion/react';

const FadeIn = ({ children, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: '-50px 0px' }}
      transition={{ duration: 0.7 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
