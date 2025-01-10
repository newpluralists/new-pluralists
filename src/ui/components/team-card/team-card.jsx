import React from 'react';
import { CustomImage } from 'tectonica-ui';
import placeholderImg from '../../../images/placeholder-team.png';

import './styles.scss';

const TeamCard = ({ team }) => {
  const { name, lastName, memberPosition, email, image } = team;

  return (
    <article className="ui-team-card">
      {image ? (
        <CustomImage image={image} />
      ) : (
        <img className="image-wrapper" src={placeholderImg} alt="Placeholder team image" />
      )}
      {name && (
        <h4>
          {name} {lastName}
        </h4>
      )}
      {memberPosition && <span className="position">{memberPosition}</span>}
      {email && (
        <a className="email" href={`mailto:${email}`}>
          {email}
        </a>
      )}
    </article>
  );
};

export default TeamCard;
