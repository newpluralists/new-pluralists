import React from 'react';
import './styles.scss';

const FunderCard = ({ funder }) => {
  const { name, logo, url } = funder;

  const renderContent = () => (
    <>
      <img
        src={logo.url}
        alt={logo.alt || 'Funder Logo'}
        width={logo.width}
        height={logo.height}
        className="img-full"
        loading="lazy"
      />
      {name && <span>{name}</span>}
    </>
  );

  if (url) {
    return (
      <a className="funder-card" href={url} target="_blank" rel="noreferrer">
        {renderContent()}
      </a>
    );
  }

  return <div className="funder-card">{renderContent()}</div>;
};

export default FunderCard;
