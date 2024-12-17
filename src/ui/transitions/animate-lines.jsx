import React from 'react';
import { motion } from 'motion/react';

const AnimateLines = ({ paths }) => {
  const pathVariants = {
    hidden: { fill: 'rgba(128, 170, 255, 0)', fillOpacity: 0 },
    visible: { fill: 'rgba(128, 170, 255, 1)', fillOpacity: 1 },
  };

  return (
    <svg width="882" height="239" viewBox="0 0 882 239" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.7" clipPath="url(#clip0_2334_6329)">
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path.d}
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.1,
              delay: (paths.length - 1 - i) * 0.015,
              ease: 'easeInOut',
            }}
          />
        ))}
      </g>
      <defs>
        <clipPath id="clip0_2334_6329">
          <rect width="882" height="239" fill="white" transform="matrix(1 0 0 -1 0 239)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AnimateLines;
