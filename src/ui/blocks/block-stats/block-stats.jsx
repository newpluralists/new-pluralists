import React from 'react';
import './styles.scss';

const BlockStats = ({ block }) => {
  const { items = [] } = block;

  return (
    <div className="ui-block-stats">
      {items.map((item) => (
        <div className="item" key={item.id}>
          <div key={item.id} className="item">
            <span className="title" style={{ color: item.headingColor?.hex }}>
              {item.title}
            </span>
            <div className="separator" />
            <div className="information" dangerouslySetInnerHTML={{ __html: item.information }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockStats;
