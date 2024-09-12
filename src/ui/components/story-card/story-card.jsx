import React from 'react';
import { Card } from 'tectonica-ui';

import './styles.scss';

const StoryCard = ({ story }) => {
  const { title, introduction, cardColorVariant, tags = [], image, slug, model } = story;

  return (
    <div className={`ui-story-card`}>
      <Card
        card={{
          title,
          tags,
          introduction,
          image,
          cta: { link: { path: { slug, model } } },
          backgroundColor: cardColorVariant,
          date: null,
        }}
      />
    </div>
  );
};

export default StoryCard;
