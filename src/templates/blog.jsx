import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Hero } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';

const BlogDetail = ({ data: { blog, favicon } }) => {
  const { title, seo, content } = blog;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <div className="container">
        <StructuredTextDefault content={content} />
      </div>
    </>
  );
};

export default BlogDetail;

export const BlogDetailQuery = graphql`
  query BlogDetailQuery($id: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsPost(id: { eq: $id }) {
      title
      content {
        value
        blocks {
          __typename
          ...BlockImage
          ...BlockEmbedIframe
        }
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
