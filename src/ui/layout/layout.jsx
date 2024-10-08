import React, { useEffect } from 'react';
import CookiesBanner from '../components/cookies-banner/cookies-banner';
import HeaderWrapper from './header/header-wrapper';
import FooterWrapper from './footer/footer-wrapper';

import '../../styles/navbar.scss';
import '../../styles/main.scss';

const Layout = ({ children }) => {
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
      <main>{children}</main>
      <FooterWrapper />
    </div>
  );
};

export default Layout;
