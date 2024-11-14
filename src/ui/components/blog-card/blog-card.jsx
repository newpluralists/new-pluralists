import React from 'react';
import { Card, truncateText } from 'tectonica-ui';

import './styles.scss';

const BlogCard = ({ blog, queryParams }) => {
  const { title, slug, model, mainImage } = blog;

  return (
    <div className="ui-blog-card">
      <Card
        card={{
          title: truncateText(title, 80),
          image: mainImage,
          cta: { link: { path: { slug: `${slug}${queryParams ? queryParams.toString() : ''}`, model } } },
          date: null,
        }}
      />
    </div>
  );
};

export default BlogCard;
