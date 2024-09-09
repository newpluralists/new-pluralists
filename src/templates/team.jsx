import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Hero } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';

const TeamDetail = ({ data: { team, favicon } }) => {
  const { name, seo, content } = team;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={name} />
      <div className="container">{/* <StructuredTextDefault content={content} /> */}</div>
    </>
  );
};

export default TeamDetail;

export const TeamDetailQuery = graphql`
  query TeamDetailQuery($id: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    team: datoCmsTeam(id: { eq: $id }) {
      name
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
