import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Breadcrumbs, ListPaginated } from 'tectonica-ui';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';

const GranteeList = ({ data: { granteeList, grantees, favicon } }) => {
  const { title, seo } = granteeList;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />

      <ListWrapper variant="lavander">
        <Breadcrumbs currentPage={title} />
        <h1>{title}</h1>

        <ListPaginated
          list={grantees.edges}
          renderItem={(grantee) => (
            <div className="p-5" key={grantee.node.id}>
              <h2>{grantee.node.name}</h2>
              <ul>
                {grantee.node.projects.map((project) => (
                  <li key={project.id}>
                    {project.name} ({project.portfolio.name})
                  </li>
                ))}
              </ul>
            </div>
          )}
        />
      </ListWrapper>
    </>
  );
};

export default GranteeList;

export const GranteeListQuery = graphql`
  query GranteeListQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    granteeList: datoCmsGranteesList {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    grantees: allDatoCmsGrantee {
      edges {
        node {
          id
          name
          projects {
            ... on DatoCmsProject {
              id
              name
              portfolio {
                ... on DatoCmsGranteePortfolio {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
