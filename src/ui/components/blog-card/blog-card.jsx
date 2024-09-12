import React from 'react';
import { Card } from 'tectonica-ui';

import './styles.scss';

const BlogCard = ({ blog }) => {
  const { title, slug, model, mainImage } = blog;

  return (
    <div className="ui-blog-card">
      <Card
        card={{
          title,
          image: mainImage,
          cta: { link: { path: { slug, model } } },
          date: null,
        }}
      />
    </div>
  );
};

export default BlogCard;
