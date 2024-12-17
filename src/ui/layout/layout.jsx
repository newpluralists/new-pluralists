import React, { useEffect } from 'react';
import CookiesBanner from '../components/cookies-banner/cookies-banner';
import HeaderWrapper from './header/header-wrapper';
import FooterWrapper from './footer/footer-wrapper';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from '@reach/router';

import '../../styles/navbar.scss';
import '../../styles/main.scss';

const Layout = ({ children }) => {
  const location = useLocation();

  const maskVariants = {
    initial: { y: '100%' }, // Máscara comienza fuera de la vista (abajo)
    enter: { y: '0%', transition: { duration: 0.7, ease: 'easeInOut' } }, // Barrido hacia arriba
    exit: { y: '-100%', transition: { duration: 0.7, ease: 'easeInOut' } }, // Barrido hacia arriba
    hidden: { display: 'none' }, // La máscara se oculta después de la animación
  };

  useEffect(() => {
    const handleNavbarSticky = () => {
      const navbar = document.querySelector('.ui-navbar');
      const sticky = navbar.offsetTop;
      if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleNavbarSticky);

    return () => {
      window.removeEventListener('scroll', handleNavbarSticky);
    };
  }, []);

  return (
    <div id="np-layout">
      <CookiesBanner />
      <HeaderWrapper />
      <AnimatePresence mode="wait">
        <motion.div
          key={`mask-${location.pathname}`}
          // className="transition-mask"
          // initial="initial"
          // animate="enter"
          // exit="exit"
          // onAnimationComplete={(definition) => {
          //   console.log('eee: ', definition);

          //   if (definition === 'enter') {
          //     // Cambiar a hidden después de la animación de salida
          //     document.querySelector('.transition-mask').style.display = 'none';
          //   }
          // }}
          // variants={maskVariants}
        />

        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          {children}
        </motion.main>

        <FooterWrapper />
      </AnimatePresence>
    </div>
  );
};

export default Layout;
