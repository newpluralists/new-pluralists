import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import HomeHero from '../ui/components/home-hero/home-hero';
import Layout from '../ui/layout/layout';

const IndexPage = ({ data: { homepage, favicon } }) => {
  const { title, introduction, secondaryText, backgroundImageOrVideo, backgroundOpacity, blocks = [], seo } = homepage;

  return (
    <Layout>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <HomeHero
        title={title}
        introduction={introduction}
        extraText={secondaryText}
        asset={backgroundImageOrVideo}
        backgroundOpacity={backgroundOpacity}
      />

      <BlockBuilder components={blocks} />
    </Layout>
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
      introduction
      secondaryText
      backgroundImageOrVideo {
        url
      }
      backgroundOpacity
      blocks {
        __typename
        ...BlockNarrativeBlockFull
        ...BlockPrinciples
        ...BlockImpact
        ...BlockStories
        ...BlockUpdates
        ...BlockPartners
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
