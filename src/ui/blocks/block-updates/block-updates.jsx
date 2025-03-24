import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogCard from '../../components/blog-card/blog-card';
import { ButtonList, isArrayAndNotEmpty } from 'tectonica-ui';
import FadeIn from '../../transitions/fade';

import './styles.scss';

const BlockUpdates = ({ block }) => {
  const { headline, introduction, ctas = [], backgroundImage, highlightPosts = [] } = block || {};

  const { blogs } = useStaticQuery(graphql`
    query {
      blogs: allDatoCmsPost(sort: { date: DESC }, limit: 3) {
        edges {
          node {
            ...PostCard
          }
        }
      }
    }
  `);

  const posts = isArrayAndNotEmpty(highlightPosts) ? highlightPosts : blogs.edges.map((p) => p.node);

  return (
    <section className="block-updates">
      <div className="container">
        <FadeIn>
          {headline && <h3>{headline}</h3>}
          {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}

          <div className="row">
            {posts.map((post) => (
              <div className="col-lg-4 col-sm-6" key={post.id}>
                <BlogCard blog={post} />
              </div>
            ))}
          </div>
        </FadeIn>

        {ctas && <ButtonList buttons={ctas} />}
      </div>

      {backgroundImage && (
        <div className="block-updates__background-image">
          <img src={backgroundImage.url} alt={backgroundImage.alt || 'Decorative graphic'} loading="lazy" />
        </div>
      )}
    </section>
  );
};

export default BlockUpdates;
