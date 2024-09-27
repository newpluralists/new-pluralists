import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';
import BuilderCard from '../ui/components/builder-card/builder-card';

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
              <BuilderCard builder={node} />
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
          model {
            apiKey
          }
        }
      }
    }
  }
`;
