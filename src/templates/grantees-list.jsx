import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Accordion, Breadcrumbs } from 'tectonica-ui';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import ScrollToTop from '../ui/components/scroll-to-top/scroll-to-top';
import FadeIn from '../ui/transitions/fade';

const ITEMS_PAGINATION = 25;

const GranteeList = ({ data: { granteeList, grantees, breadcrumb, favicon } }) => {
  const { title, introduction, seo } = granteeList;
  const [visibleItems, setVisibleItems] = React.useState(ITEMS_PAGINATION);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + ITEMS_PAGINATION);
  };

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />

      <ListWrapper id="grantee-list" variant="lavander">
        {/* <Breadcrumbs breadcrumb={breadcrumb} currentPage={title} /> */}
        <h1>{title}</h1>
        {introduction && (
          <div className="basic-content">
            <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />
          </div>
        )}

        <div className="max-container-840">
          <Accordion
            block={{
              items: grantees.edges.slice(0, visibleItems).map((grantee) => ({
                title: grantee.node.name,
                children: (
                  <FadeIn>
                    <ul>
                      {grantee.node.projects.map((project) => (
                        <li key={project.id}>
                          {project.name && <h3>{project.name}</h3>}
                          {project.portfolio?.name && <span>{project.portfolio.name}</span>}
                        </li>
                      ))}
                    </ul>

                    {grantee.node.website && (
                      <a
                        className="button-block primary small"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();

                          window.open(grantee.node.website);
                        }}
                      >
                        Website
                      </a>
                    )}
                  </FadeIn>
                ),
              })),
            }}
          />

          {visibleItems < grantees.edges.length && (
            <div className="load-more">
              <button onClick={loadMoreItems}>Load More</button>
            </div>
          )}
        </div>
      </ListWrapper>
      <ScrollToTop to="grantee-list" />
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
      introduction
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    grantees: allDatoCmsGrantee(sort: { name: ASC }) {
      edges {
        node {
          id
          name
          website
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
