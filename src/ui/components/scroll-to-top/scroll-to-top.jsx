import React from 'react';
import './styles.scss';

const ScrollToTop = ({ to }) => {
  const handleOnScrollTo = () => {
    const selector = document.querySelector(`#${to}`);
    if (!selector) {
      console.warn('Selector not found.');
    }
    selector.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className="ui-scroll-top" onClick={handleOnScrollTo}>
      Get back to top
    </button>
  );
};

export default ScrollToTop;
