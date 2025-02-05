import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import HomeHero from '../ui/components/home-hero/home-hero';
import PageLoader from '../ui/components/page-loader/page-loader';

const IndexPage = ({ pageContext, data: { homepage, favicon } }) => {
  const { title, introduction, secondaryText, backgroundImageOrVideo, backgroundOpacity, blocks = [], seo } = homepage;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS seo={seo} favicon={favicon} homepage />
      <HomeHero
        title={title}
        introduction={introduction}
        extraText={secondaryText}
        asset={backgroundImageOrVideo}
        backgroundOpacity={backgroundOpacity}
      />

      <BlockBuilder components={blocks} />
    </PageLoader>
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
