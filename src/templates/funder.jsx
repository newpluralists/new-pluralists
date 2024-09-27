import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { CustomImage, Hero } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';
import Layout from '../ui/layout/layout';

const FunderDetail = ({ data: { funder, favicon } }) => {
  const { title, funderPosition, image, content, seo } = funder;

  return (
    <Layout>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CustomImage image={image} />
          </div>
          <div className="col-md-6">
            <h2>{funderPosition}</h2>
            <StructuredTextDefault content={content} />
          </div>
        </div>
      </div>
    </Layout>
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
      funderPosition
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
