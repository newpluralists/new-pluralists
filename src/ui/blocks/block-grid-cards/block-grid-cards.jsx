import React from 'react';
import GenericCard from './generic-card';

import './styles.scss';

const BlockGridCards = ({ block }) => {
  const { headline, introduction, items } = block;

  return (
    <section className="block-grid-cards">
      <div className="container">
        {headline && <h3>{headline}</h3>}
        {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}

        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-4">
              <GenericCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockGridCards;
