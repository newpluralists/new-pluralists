import React from 'react';
import BlogCard from '../../components/blog-card/blog-card';
import { ButtonList } from 'tectonica-ui';

import './styles.scss';

const BlockUpdates = ({ block }) => {
  const { headline, introduction, ctas = [], backgroundImage, highlightPosts = [] } = block;

  return (
    <section className="block-updates">
      <div className="container">
        {headline && <h3>{headline}</h3>}
        {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}

        <div className="row">
          {highlightPosts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <BlogCard blog={post} />
            </div>
          ))}
        </div>

        {ctas && <ButtonList buttons={ctas} />}
      </div>

      {backgroundImage && (
        <div className="block-updates__background-image">
          <img src={backgroundImage.url} alt={backgroundImage.alt} />
        </div>
      )}
    </section>
  );
};

export default BlockUpdates;
