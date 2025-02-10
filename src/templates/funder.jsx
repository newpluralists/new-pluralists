import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { CustomImage, Hero } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';
import PageLoader from '../ui/components/page-loader/page-loader';

const FunderDetail = ({ pageContext, data: { funder, favicon } }) => {
  const { slug, title, funderPosition, image, content, seo } = funder;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS
        seo={seo}
        favicon={favicon}
        canonicalMetadata={{
          slug: slug,
          model: 'funder',
        }}
      />
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
    </PageLoader>
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
      slug
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
