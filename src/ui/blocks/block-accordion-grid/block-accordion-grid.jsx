import React from 'react';
import { Accordion, ButtonList, isArrayAndNotEmpty } from 'tectonica-ui';

import './styles.scss';

const BlockAccordionGrid = ({ block }) => {
  const { headline, introduction, items = [], ctas = [] } = block;

  return (
    <section className="block-accordion-grid">
      <div className="container">
        {headline && <h3>{headline}</h3>}

        <div className="wrapper">
          {introduction && <div className="intro" dangerouslySetInnerHTML={{ __html: introduction }} />}
          {isArrayAndNotEmpty(items) && <Accordion block={{ items: items }} />}
          {ctas && <ButtonList buttons={ctas} />}
        </div>
      </div>
    </section>
  );
};

export default BlockAccordionGrid;
