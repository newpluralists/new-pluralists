import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Hero } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';
import PageLoader from '../ui/components/page-loader/page-loader';

const EventDetail = ({ pageContext, data: { event, favicon } }) => {
  const { slug, name, seo, content } = event;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS
        seo={seo}
        favicon={favicon}
        canonicalMetadata={{
          slug: slug,
          model: 'event',
        }}
      />
      <Hero title={name} />
      <div className="container">{/* <StructuredTextDefault content={content} /> */}</div>
    </PageLoader>
  );
};

export default EventDetail;

export const EventDetailQuery = graphql`
  query EventDetailQuery($id: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    event: datoCmsEvent(id: { eq: $id }) {
      id
      slug
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
