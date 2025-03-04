import React from 'react';
import { createContext, useContext, useState } from 'react';

const TextSizeContext = createContext();

export const TextSizeProvider = ({ children }) => {
  const scales = ['scale-1', 'scale-2', 'scale-3', 'scale-4', 'scale-5'];
  const [scaleIndex, setScaleIndex] = useState(2);

  const increaseSize = () => setScaleIndex((prev) => Math.min(prev + 1, scales.length - 1));
  const decreaseSize = () => setScaleIndex((prev) => Math.max(prev - 1, 0));

  return (
    <TextSizeContext.Provider value={{ scaleClass: scales[scaleIndex], increaseSize, decreaseSize }}>
      {children}
    </TextSizeContext.Provider>
  );
};

export const useTextSize = () => useContext(TextSizeContext);
