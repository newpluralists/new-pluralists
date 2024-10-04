import React from 'react';
import { ButtonList, isArrayAndNotEmpty, NarrativeBlock } from 'tectonica-ui';

import './styles.scss';

const BlockNarrativeGrid = ({ block }) => {
  const { headline, introduction, items = [], ctas = [] } = block;

  return (
    <section className={`block-narrative-grid ${introduction ? 'with-introduction' : ''}`}>
      <div className="container">
        {headline && <h3>{headline}</h3>}
        {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}

        {isArrayAndNotEmpty(items) && (
          <div className="grid">
            {items.map((item, index) => (
              <NarrativeBlock block={{ ...item, preTitle: `0${index + 1}` }} key={item.id} />
            ))}
          </div>
        )}

        {ctas && <ButtonList buttons={ctas} />}
      </div>
    </section>
  );
};

export default BlockNarrativeGrid;
