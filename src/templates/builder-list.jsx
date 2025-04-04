import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';
import BuilderCard from '../ui/components/builder-card/builder-card';
import PageLoader from '../ui/components/page-loader/page-loader';

const BuilderList = ({ pageContext, data: { builderList, builders, favicon } }) => {
  const { slug, title, seo } = builderList;

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
    </PageLoader>
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
      slug
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
