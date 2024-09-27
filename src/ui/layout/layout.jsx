import React, { useEffect } from 'react';
import { Slice } from 'gatsby';

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
      <Slice alias="cookies" />
      <Slice alias="header" />
      <main>{children}</main>
      <Slice alias="footer" />
    </div>
  );
};

export default Layout;
