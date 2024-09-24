import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import { Breadcrumbs } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';
const BasicPage = ({ data: { page, breadcrumb, favicon } }) => {
  const { title, content, seo } = page;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <ListWrapper variant="lavander basic-page">
        <Breadcrumbs breadcrumb={breadcrumb} currentPage={title} />
        <h1>{title}</h1>

        <div className="basic-content">
          <StructuredTextDefault content={content} />
        </div>
      </ListWrapper>
    </>
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
      content {
        value
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
      # blocks {
      #   __typename
      #   ...BlockImage
      #   ...BlockEmbedIframe
      #   ...BlockCta
      #   ...BlockAccordion
      #   ...BlockNarrativeBlock
      #   ...BlockGridCards
      # }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    breadcrumb: datoCmsMenuItem(id: { eq: $menuPos }) {
      ...Breadcrumb
    }
  }
`;
