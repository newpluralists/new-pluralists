import React from 'react';
import { ButtonList, isArrayAndNotEmpty, NarrativeBlock } from 'tectonica-ui';

import './styles.scss';

const BlockNarrativeGrid = ({ block }) => {
  const { headline, items = [], ctas = [] } = block;

  return (
    <section className="block-narrative-grid">
      <div className="container">
        {headline && <h3>{headline}</h3>}

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
