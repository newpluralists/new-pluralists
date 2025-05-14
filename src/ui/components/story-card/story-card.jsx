import React from 'react';
import { Card } from 'tectonica-ui';

import './styles.scss';

const StoryCard = ({ story, minimal = false }) => {
  const { title, introduction, region, sector, tags, cardColorVariant, image, slug, model } = story;

  if (minimal) {
    return (
      <div className={`ui-story-card minimal`}>
        <Card
          card={{
            title,
            introduction,
            tags: tags,
            image,
            cta: { link: { path: { slug, model } } },
            backgroundColor: cardColorVariant,
            date: null,
          }}
        />
      </div>
    );
  }

  return (
    <div className={`ui-story-card`}>
      <Card
        card={{
          title,
          introduction: `<span><b>Region:</b> ${region}</span><span><b>Sector:</b> ${sector}</span><div>${introduction}</div>`,
          image,
          cta: { link: { path: { slug, model } } },
          date: null,
        }}
      />
    </div>
  );
};

export default StoryCard;
