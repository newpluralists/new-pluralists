import * as React from 'react';
import { graphql, Link } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';

const BuilderList = ({ data: { builderList, builders, favicon } }) => {
  const { title, seo } = builderList;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />

      <div className="container">
        <div className="row g-5">
          {builders.edges.map(({ node }) => (
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
                  <Link to={`/builders/${node.slug}`} className="btn btn-primary">
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

export default BuilderList;

export const BuilderListQuery = graphql`
  query BuilderListQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    builderList: datoCmsFieldBuildersList {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    builders: allDatoCmsBuilder {
      edges {
        node {
          id
          slug
          title
          builderPosition
          image {
            width
            height
            alt
            url
          }
        }
      }
    }
  }
`;
