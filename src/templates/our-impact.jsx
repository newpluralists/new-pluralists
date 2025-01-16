import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import TextContent from '../ui/components/text-content/text-content';
import SpecialHero from '../ui/layout/special-hero/special-hero';
import PageLoader from '../ui/components/page-loader/page-loader';

const OurImpact = ({ pageContext, data: { page, breadcrumb, favicon } }) => {
  const { title, introduction, backgroundImage, content, seo } = page;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <SpecialHero
        title={title}
        introduction={introduction}
        image={backgroundImage}
        breadcrumb={breadcrumb}
        variant="yellow impact"
      />
      <TextContent content={content} classNames={'our-impact'} showDecorator />
    </PageLoader>
  );
};

export default OurImpact;

export const OurImpactListQuery = graphql`
  query OurImpactQuery($menuPos: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    page: datoCmsOurImpact {
      title
      introduction
      backgroundImage {
        width
        height
        alt
        url
      }
      content {
        value
        blocks {
          __typename
          ...BlockStories
          ...BlockResources
          ...BlockCtaGrid
          ...BlockAccordionGrid
          ...BlockHeadlines
          ...BlockStats
        }
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    breadcrumb: datoCmsMenuItem(id: { eq: $menuPos }) {
      ...Breadcrumb
    }
  }
`;
