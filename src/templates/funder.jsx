import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Hero } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';

const FunderDetail = ({ data: { funder, favicon } }) => {
  const { title, seo, content } = funder;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <StructuredTextDefault content={content} />
    </>
  );
};

export default FunderDetail;

export const FunderDetailQuery = graphql`
  query FunderDetailQuery($id: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    funder: datoCmsFunder(id: { eq: $id }) {
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