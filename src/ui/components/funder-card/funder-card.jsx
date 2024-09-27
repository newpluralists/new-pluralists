import React from 'react';
import './styles.scss';

const FunderCard = ({ funder }) => {
  const { name, logo } = funder;

  return (
    <div className="funder-card">
      <img src={logo.url} alt={logo.alt} width={logo.width} height={logo.height} className="img-full" loading="lazy" />
      {name && <span>{name}</span>}
    </div>
  );
};

export default FunderCard;
