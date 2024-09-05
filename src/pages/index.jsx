import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';

const IndexPage = ({ data: { homepage, favicon } }) => {
  const { title, blocks = [], seo } = homepage;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <div className="container my-5 py-5">
        <BlockBuilder components={blocks} />
      </div>
    </>
  );
};

export default IndexPage;

export const HomepageQuery = graphql`
  query HomepageQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    homepage: datoCmsHomepage {
      title
      blocks {
        __typename
        ...BlockAccordion
        ...BlockImageGallery
        ...BlockNarrativeBlock
        ...BlockNarrativeBlockAdvanced
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
