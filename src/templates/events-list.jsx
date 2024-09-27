import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';
import EventCard from '../ui/components/event-card/event-card';
import Layout from '../ui/layout/layout';

const EventsList = ({ data: { eventsList, events, favicon } }) => {
  const { title, seo } = eventsList;

  return (
    <Layout>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <div className="container">
        <div className="row g-5 mt-5">
          {events.edges.map(({ node }) => (
            <div key={node.id} className="col-12 col-md-6 col-lg-4">
              <EventCard event={node} />
            </div>
          ))}
        </div>

        <BlockBuilder components={[]} />
      </div>
    </Layout>
  );
};

export default EventsList;

export const EventsListQuery = graphql`
  query EventsListQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    eventsList: datoCmsEventList {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    events: allDatoCmsEvent {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`;
