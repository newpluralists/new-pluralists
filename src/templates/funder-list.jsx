import * as React from 'react';
import { graphql, Link } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';

const FunderList = ({ data: { funderList, funders, favicon } }) => {
  const { title, seo } = funderList;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <div className="container">
        <div className="row g-5">
          {funders.edges.map(({ node }) => (
            <div key={node.id} className="col-12 col-md-6 col-lg-4">
              <div className="funder-card">
                <img
                  src={node.image.url}
                  alt={node.image.alt}
                  width={node.image.width}
                  height={node.image.height}
                  className="img-full"
                />
                <div className="card-body">
                  <h5 className="card-title">{node.title}</h5>
                  <p className="card-text">{node.funderPosition}</p>
                  <Link to={`/funders/${node.slug}`} className="btn btn-primary">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BlockBuilder components={[]} />
      </div>
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
        }
      }
    }
  }
`;
