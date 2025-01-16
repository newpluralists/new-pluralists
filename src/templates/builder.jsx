import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { CustomImage, Hero } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';
import PageLoader from '../ui/components/page-loader/page-loader';

const BuilderDetail = ({ pageContext, data: { builder, favicon } }) => {
  const { title, builderPosition, image, content, seo } = builder;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CustomImage image={image} />
          </div>
          <div className="col-md-6">
            <h2>{builderPosition}</h2>
            <StructuredTextDefault content={content} />
          </div>
        </div>
      </div>
    </PageLoader>
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
      builderPosition
      image {
        alt
        url
        fluid(maxWidth: 800) {
          ...GatsbyDatoCmsFluid
        }
      }
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
