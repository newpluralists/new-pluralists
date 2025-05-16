import React, { useState, useEffect, useRef } from 'react';
import { useTextSize } from '../../../context/text-size-context';

import './styles.scss';

const TextSizeAdjuster = () => {
  const { increaseSize, decreaseSize } = useTextSize();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      return document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`ui-text-resize ${isMobileOpen ? 'open' : 'hide'}`} ref={componentRef}>
      <button className="increase" onClick={increaseSize}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path
            d="M14.375 5V23.75M23.75 14.375H5"
            stroke="#46469E"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span onClick={() => setIsMobileOpen((prev) => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
          <path
            d="M13.3333 3.69925V23.5H10V3.69925H0V0.5H23.3333V3.69925H13.3333ZM30 11.1642H17.7778V14.3634H22.2222V23.5H25.5556V14.3634H30V11.1642Z"
            fill="black"
          />
        </svg>
      </span>
      <button className="decrease" onClick={decreaseSize}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M6.25 15H23.75" stroke="#46469E" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default TextSizeAdjuster;
