import React from 'react';
import StructuredTextDefault from '../structured-text-default';

import './styles.scss';

const TextContent = ({ content, children }) => {
  return (
    <div className="text-content">
      <StructuredTextDefault content={content} withCustomRules />
      {children}
    </div>
  );
};

export default TextContent;
