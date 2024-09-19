import React from 'react';
import { Card } from 'tectonica-ui';

import './styles.scss';

const GenericCard = ({ item }) => {
  const { title, introduction, image, link } = item;

  return (
    <div className="generic-card">
      <Card
        card={{
          title,
          introduction,
          image,
          cta: link
            ? {
                link,
              }
            : null,
          date: null,
        }}
      />
    </div>
  );
};

export default GenericCard;
