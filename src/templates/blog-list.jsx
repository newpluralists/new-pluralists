import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';
import BlogCard from '../ui/components/blog-card/blog-card';

const BlogList = ({ data: { blogList, blogs, favicon } }) => {
  const { title, seo } = blogList;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <div className="container">
        <div className="row g-5 mt-5">
          {blogs.edges.map(({ node }) => (
            <div key={node.id} className="col-12 col-md-6 col-lg-4">
              <BlogCard blog={node} />
            </div>
          ))}
        </div>

        <BlockBuilder components={[]} />
      </div>
    </>
  );
};

export default BlogList;

export const BlogListQuery = graphql`
  query BlogListQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blogList: datoCmsBlogPostsList {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    blogs: allDatoCmsPost {
      edges {
        node {
          id
          slug
          title
          mainImage {
            url
            width
            height
            alt
          }
          model {
            apiKey
          }
        }
      }
    }
  }
`;
