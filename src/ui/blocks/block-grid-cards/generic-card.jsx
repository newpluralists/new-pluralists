import React from 'react';
import { Card } from 'tectonica-ui';
import FadeIn from '../../transitions/fade';

import './styles.scss';

const GenericCard = ({ item }) => {
  const { title, introduction, image, link } = item;

  return (
    <div className="generic-card">
      <FadeIn>
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
      </FadeIn>
    </div>
  );
};

export default GenericCard;
