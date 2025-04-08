import React from 'react';
import './styles.scss';

const BlockList = ({ block }) => {
  const { headline, list } = block;

  return (
    <div id="ui-block-list">
      {headline && <p className="headline">{headline}</p>}
      {list && <div className="list-content" dangerouslySetInnerHTML={{ __html: list }} />}
    </div>
  );
};

export default BlockList;
