import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import TeamCard from '../ui/components/team-card/team-card';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import { isArrayAndNotEmpty } from 'tectonica-ui';
import PageLoader from '../ui/components/page-loader/page-loader';

const TeamList = ({ pageContext, data: { teamList, leads, staff, favicon } }) => {
  const { slug, title, introduction, seo } = teamList;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS
        seo={seo}
        favicon={favicon}
        canonicalMetadata={{
          slug: slug,
          model: 'basicPage',
        }}
      />
      <ListWrapper variant="lavander team-list exec">
        <h1>{title}</h1>
        {introduction && (
          <div className="basic-content">
            <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />
          </div>
        )}

        {isArrayAndNotEmpty(staff.edges) && (
          <>
            <h4 className="heading">Staff</h4>
            <div className="row g-5 mt-4 pb-5">
              {staff.edges.map(({ node }) => (
                <div key={node.id} className="col-12 col-md-6 col-lg-4">
                  <TeamCard team={node} />
                </div>
              ))}
            </div>
          </>
        )}

        {isArrayAndNotEmpty(leads.edges) && (
          <>
            <h4 className="heading">Co-Leads</h4>
            <div className="row g-5 mt-4">
              {leads.edges.map(({ node }) => (
                <div key={node.id} className="col-12 col-md-6 col-lg-4">
                  <TeamCard team={node} />
                </div>
              ))}
            </div>
          </>
        )}
      </ListWrapper>
    </PageLoader>
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
      slug
      title
      introduction
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    leads: allDatoCmsTeam(sort: { lastName: ASC }, filter: { category: { eq: "co-leads" } }) {
      edges {
        node {
          ...TeamCard
        }
      }
    }
    staff: allDatoCmsTeam(sort: { lastName: ASC }, filter: { category: { eq: "staff" } }) {
      edges {
        node {
          ...TeamCard
        }
      }
    }
  }
`;
