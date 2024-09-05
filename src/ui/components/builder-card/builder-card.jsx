import React from 'react';
import { CustomLink } from 'tectonica-ui';

const BuilderCard = ({ builder }) => {
  return (
    <div className="funder-card">
      <img
        src={builder.image.url}
        alt={builder.image.alt}
        width={builder.image.width}
        height={builder.image.height}
        className="img-full"
      />
      <div className="card-body">
        <h5 className="card-title">{builder.title}</h5>
        <p className="card-text">{builder.funderPosition}</p>
        <CustomLink to={{ path: builder }} className="btn btn-primary">
          Read more.
        </CustomLink>
      </div>
    </div>
  );
};

export default BuilderCard;
