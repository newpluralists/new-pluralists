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
      Back to top
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3.75 8.75L10 2.5M10 2.5L16.25 8.75M10 2.5V17.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
