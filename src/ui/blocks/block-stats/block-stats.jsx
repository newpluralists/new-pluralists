import React from 'react';
import FadeIn from '../../transitions/fade';

import './styles.scss';

const BlockStats = ({ block }) => {
  const { items = [] } = block;

  return (
    <div className="ui-block-stats">
      {items.map((item) => (
        <div className="item" key={item.id}>
          <FadeIn>
            <div key={item.id} className="item">
              <span className="title" style={{ color: item.headingColor?.hex }}>
                {item.title}
              </span>
              <div className="separator" />
              <div className="information" dangerouslySetInnerHTML={{ __html: item.information }} />
            </div>
          </FadeIn>
        </div>
      ))}
    </div>
  );
};

export default BlockStats;
