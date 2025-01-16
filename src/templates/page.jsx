import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import { Breadcrumbs } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';
import SpecialHero from '../ui/layout/special-hero/special-hero';
import PageLoader from '../ui/components/page-loader/page-loader';

const BasicPage = ({ pageContext, data: { page, breadcrumb, favicon } }) => {
  const { title, introduction, variant, backgroundImage, backgroundColor, content, seo } = page;

  if (variant === 'special') {
    return (
      <PageLoader context={pageContext} favicon={favicon}>
        <SeoDatoCMS seo={seo} favicon={favicon} />
        <SpecialHero title={title} introduction={introduction} image={backgroundImage} variant={backgroundColor} />
        <ListWrapper hideSvg variant="basic-page with-header">
          <div className="basic-content">
            <StructuredTextDefault content={content} />
          </div>
        </ListWrapper>
      </PageLoader>
    );
  }

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <ListWrapper variant="lavander basic-page">
        {/* <Breadcrumbs breadcrumb={breadcrumb} currentPage={title} /> */}
        <h1>{title}</h1>

        <div className="basic-content">
          <StructuredTextDefault content={content} />
        </div>
      </ListWrapper>
    </PageLoader>
  );
};

export default BasicPage;

export const PageQuery = graphql`
  query PageQuery($id: String, $menuPos: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    page: datoCmsBasicPage(id: { eq: $id }) {
      title
      introduction
      variant
      backgroundImage {
        url
        alt
        width
        height
      }
      backgroundColor
      content {
        value
        links {
          __typename
          id: originalId
          ... on DatoCmsBasicPage {
            slug
            model {
              apiKey
            }
          }
        }
        blocks {
          __typename
          ...BlockImage
          ...BlockEmbedIframe
          ...BlockCta
          ...BlockAccordion
          ...BlockNarrativeBlock
          ...BlockGridCards
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
