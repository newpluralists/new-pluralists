import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Accordion, Breadcrumbs } from 'tectonica-ui';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';

const GranteeList = ({ data: { granteeList, grantees, breadcrumb, favicon } }) => {
  const { title, seo } = granteeList;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />

      <ListWrapper variant="lavander">
        <Breadcrumbs breadcrumb={breadcrumb} currentPage={title} />
        <h1>{title}</h1>

        <div className="max-container-840">
          <Accordion
            block={{
              items: grantees.edges.map((grantee) => ({
                title: grantee.node.name,
                children: (
                  <ul>
                    {grantee.node.projects.map((project) => (
                      <li key={project.id}>
                        {project.name && <h3>{project.name}</h3>}
                        {project.portfolio?.name && <span>{project.portfolio.name}</span>}
                      </li>
                    ))}
                  </ul>
                ),
              })),
            }}
          />
        </div>
      </ListWrapper>
    </>
  );
};

export default GranteeList;

export const GranteeListQuery = graphql`
  query GranteeListQuery($menuPos: String) {
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
    breadcrumb: datoCmsMenuItem(id: { eq: $menuPos }) {
      ...Breadcrumb
    }
  }
`;
