import React from 'react';
import { CustomLink } from 'tectonica-ui';

const FunderCard = ({ funder }) => {
  return (
    <div className="funder-card">
      <img
        src={funder.image.url}
        alt={funder.image.alt}
        width={funder.image.width}
        height={funder.image.height}
        className="img-full"
      />
      <div className="card-body">
        <h5 className="card-title">{funder.title}</h5>
        <p className="card-text">{funder.funderPosition}</p>
        <CustomLink to={{ path: funder }} className="btn btn-primary">
          Read more
        </CustomLink>
      </div>
    </div>
  );
};

export default FunderCard;
