import React from 'react';
import './styles.scss';

const DonorCard = ({ donor }) => {
  const { fullname, information } = donor;

  return (
    <div className="ui-donor-card">
      <h3>{fullname}</h3>
      <div className="information" dangerouslySetInnerHTML={{ __html: information }} />
    </div>
  );
};

export default DonorCard;
