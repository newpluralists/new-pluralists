import React from 'react';
import HeaderWrapper from './header/header-wrapper';
import FooterWrapper from './footer/footer-wrapper';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderWrapper />
      <main>{children}</main>
      <FooterWrapper />
    </>
  );
};

export default Layout;
