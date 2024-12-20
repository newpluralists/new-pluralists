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
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }}
          exit={{ opacity: 0, transition: { duration: 0, ease: 'ease' } }}
        >
          {children}
        </motion.main>

        <FooterWrapper />
      </AnimatePresence>
    </div>
  );
};

export default Layout;
