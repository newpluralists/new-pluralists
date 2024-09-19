import React from 'react';
import { ButtonList } from 'tectonica-ui';

import './styles.scss';

const BlockCtaGrid = ({ block }) => {
  const { ctaItems } = block;

  return (
    <div className="block-cta-grid">
      <ButtonList buttons={ctaItems} />
    </div>
  );
};

export default BlockCtaGrid;
