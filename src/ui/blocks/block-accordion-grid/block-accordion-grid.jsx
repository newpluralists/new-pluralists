import React from 'react';
import './styles.scss';
import { Accordion, ButtonList, isArrayAndNotEmpty } from 'tectonica-ui';

const BlockAccordionGrid = ({ block }) => {
  const { headline, introduction, items = [], ctas = [] } = block;

  console.log({ items });

  return (
    <section className="block-accordion-grid">
      <div className="container">
        {headline && <h3>{headline}</h3>}

        <div className="wrapper">
          <div className="intro" dangerouslySetInnerHTML={{ __html: introduction }} />

          {isArrayAndNotEmpty(items) && <Accordion block={{ items: items }} />}

          {ctas && <ButtonList buttons={ctas} />}
        </div>
      </div>
    </section>
  );
};

export default BlockAccordionGrid;