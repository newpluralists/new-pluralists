import React from 'react';
import './styles.scss';

const BlockHeadlinesGrid = ({ block }) => {
  const { items = [] } = block;

  return (
    <div className="block-headlines-grid">
      {items.map((item, index) => (
        <div key={item.id} className="title-item">
          {index >= 0 && <div className="separator" />}
          <div className="text" dangerouslySetInnerHTML={{ __html: item.title }} />
        </div>
      ))}
    </div>
  );
};

export default BlockHeadlinesGrid;
