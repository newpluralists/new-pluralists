import React from 'react';
import HeaderWrapper from './header/header-wrapper';
import FooterWrapper from './footer/footer-wrapper';

const Layout = ({ children }) => {
  return (
    <div id="np-layout">
      <HeaderWrapper />
      <main>{children}</main>
      <FooterWrapper />
    </div>
  );
};

export default Layout;
