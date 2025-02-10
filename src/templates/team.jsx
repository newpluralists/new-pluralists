import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Hero } from 'tectonica-ui';
import StructuredTextDefault from '../ui/components/structured-text-default';
import PageLoader from '../ui/components/page-loader/page-loader';

const TeamDetail = ({ pageContext, data: { team, favicon } }) => {
  const { slug, name, seo, content } = team;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={name} />
      <div className="container">{/* <StructuredTextDefault content={content} /> */}</div>
    </PageLoader>
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
