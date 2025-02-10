import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import SpecialHero from '../ui/layout/special-hero/special-hero';
import TextContent from '../ui/components/text-content/text-content';
import PageLoader from '../ui/components/page-loader/page-loader';

const ThePromiseOfPluralism = ({ pageContext, data: { page, breadcrumb, favicon } }) => {
  const { slug, title, introduction, backgroundImage, content, seo } = page;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS
        seo={seo}
        favicon={favicon}
        canonicalMetadata={{
          slug: slug,
          model: 'basicPage',
        }}
      />
      <SpecialHero
        title={title}
        introduction={introduction}
        image={backgroundImage}
        breadcrumb={breadcrumb}
        variant="promise"
      />
      <TextContent content={content} />
    </PageLoader>
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
      slug
      title
      introduction
      backgroundImage {
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
