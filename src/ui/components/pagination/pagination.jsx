import React from 'react';
import './styles.scss';

const Pagination = ({ items, renderItem }) => {
  return <div className="pagination">{items.map((item, index) => renderItem(item, index))}</div>;
};

export default Pagination;
