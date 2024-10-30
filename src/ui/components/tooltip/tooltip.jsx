import React, { useState } from 'react';
import './styles.scss';

const Tooltip = ({ text, description, color }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="tooltip-text" style={{ backgroundColor: color ? color.hex : undefined }}>
        {text}
      </span>
      {showTooltip && description && <div className="tooltip-content">{description}</div>}
    </div>
  );
};

export default Tooltip;
