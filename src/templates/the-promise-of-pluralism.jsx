import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import SpecialHero from '../ui/layout/special-hero/special-hero';
import TextContent from '../ui/components/text-content/text-content';

const ThePromiseOfPluralism = ({ data: { page, breadcrumb, favicon } }) => {
  const { title, introduction, backgroundImage, backgroundImageLarge, content, seo } = page;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <SpecialHero
        title={title}
        introduction={introduction}
        image={backgroundImage}
        largeBgImage={backgroundImageLarge}
        breadcrumb={breadcrumb}
        variant="promise"
      />
      <TextContent content={content} />
    </>
  );
};

export default ThePromiseOfPluralism;

export const ThePromiseOfPluralismListQuery = graphql`
  query ThePromiseOfPluralismQuery($menuPos: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    page: datoCmsThePromiseOfPluralism {
      title
      introduction
      backgroundImage {
        url
        width
        height
        alt
      }
      backgroundImageLarge {
        url
        width
        height
        alt
      }
      content {
        value
        blocks {
          __typename
          ...BlockCta
          ...BlockGridCards
          ...BlockNarrativeGrid
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
