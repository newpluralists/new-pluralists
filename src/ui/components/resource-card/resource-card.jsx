import React from 'react';
import { Card } from 'tectonica-ui';

import './styles.scss';

const ResourceCard = ({ resource }) => {
  const { title, slug, model, date, introduction, topics } = resource;

  return (
    <div className="ui-resource-card">
      <Card
        card={{
          title: title,
          introduction: introduction,
          cta: { link: { path: { slug, model } } },
          tags: topics,
          date: date,
        }}
      />
    </div>
  );
};

export default ResourceCard;
