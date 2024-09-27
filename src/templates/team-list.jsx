import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';
import TeamCard from '../ui/components/team-card/team-card';
import Layout from '../ui/layout/layout';

const TeamList = ({ data: { teamList, teams, favicon } }) => {
  const { title, seo } = teamList;

  return (
    <Layout>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <div className="container">
        <div className="row g-5 mt-5">
          {teams.edges.map(({ node }) => (
            <div key={node.id} className="col-12 col-md-6 col-lg-4">
              <TeamCard team={node} />
            </div>
          ))}
        </div>

        <BlockBuilder components={[]} />
      </div>
    </Layout>
  );
};

export default TeamList;

export const TeamListQuery = graphql`
  query TeamListQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    teamList: datoCmsTeamList {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    teams: allDatoCmsTeam {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`;
