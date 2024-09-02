import React from 'react';
// import Footer from '@layout/footer/footer';
// import Header from '@layout/header/header';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
