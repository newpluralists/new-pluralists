import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Hero } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';

const BuilderDetail = ({ data: { builder, favicon } }) => {
  const { title, seo, content } = builder;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <StructuredTextDefault content={content} />
    </>
  );
};

export default BuilderDetail;

export const BuilderDetailQuery = graphql`
  query BuilderDetailQuery($id: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    builder: datoCmsBuilder(id: { eq: $id }) {
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
