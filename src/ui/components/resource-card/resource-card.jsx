import React from 'react';
import { Card } from 'tectonica-ui';

import './styles.scss';

const ResourceCard = ({ resource }) => {
  const { title, slug, model, tags } = resource;

  return (
    <div className="ui-resource-card">
      <Card
        card={{
          title,
          cta: { link: { path: { slug, model } } },
          tags,
          date: null,
        }}
      />
    </div>
  );
};

export default ResourceCard;
