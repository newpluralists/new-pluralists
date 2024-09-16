import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import FunderCard from '../ui/components/funder-card/funder-card';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';

const FunderList = ({ data: { funderList, funders, favicon } }) => {
  const { title, seo } = funderList;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <ListWrapper variant="lavander">
        <h1>{title}</h1>

        <div className="row g-5">
          {funders.edges.map(({ node }) => (
            <div key={node.id} className="col-12 col-md-6 col-lg-4">
              <FunderCard funder={node} />
            </div>
          ))}
        </div>
      </ListWrapper>
    </>
  );
};

export default FunderList;

export const FunderListQuery = graphql`
  query FunderListQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    funderList: datoCmsFundersList {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    funders: allDatoCmsFunder {
      edges {
        node {
          id
          slug
          title
          funderPosition
          image {
            width
            height
            alt
            url
          }
          content {
            value
            blocks {
              __typename
              ...BlockImage
              ...BlockEmbedIframe
            }
          }
          model {
            apiKey
          }
        }
      }
    }
  }
`;
