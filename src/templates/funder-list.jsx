import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import FunderCard from '../ui/components/funder-card/funder-card';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import { Breadcrumbs } from 'tectonica-ui';
import BlocksBuilder from '../ui/components/block-builder';

const FunderList = ({ data: { funderList, funders, breadcrumb, favicon } }) => {
  const { title, blocks = [], seo } = funderList;

  const splitFunders = funders.edges.reduce(
    (prev, curr) => {
      if (curr.node.category && curr.node.category.name === 'Core Funders') {
        prev.core.push(curr.node);
      } else if (curr.node.category && curr.node.category.name === 'Affiliate Funders') {
        prev.affiliate.push(curr.node);
      }
      return prev;
    },
    { core: [], affiliate: [] }
  );

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <ListWrapper variant="funder-list">
        <Breadcrumbs breadcrumb={breadcrumb} currentPage={title} />
        <h1>{title}</h1>

        <h3 className="sub-title">Core Funders</h3>
        <div className="row g-5">
          {splitFunders.core.map((funder) => (
            <div key={funder.id} className="col-12 col-md-6 col-lg-3">
              <FunderCard funder={funder} />
            </div>
          ))}
        </div>

        <h3 className="sub-title extra">Affiliate Funders</h3>
        <div className="row g-5 pb-5">
          {splitFunders.affiliate.map((funder) => (
            <div key={funder.id} className="col-12 col-md-6 col-lg-3">
              <FunderCard funder={funder} />
            </div>
          ))}
        </div>

        {/* Extra Blocks */}
        {blocks && <BlocksBuilder components={blocks} />}
      </ListWrapper>
    </>
  );
};

export default FunderList;

export const FunderListQuery = graphql`
  query FunderListQuery($menuPos: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    funderList: datoCmsFundersList {
      title
      blocks {
        __typename
        ...BlockCta
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    funders: allDatoCmsFunderLogo {
      edges {
        node {
          id
          name
          logo {
            width
            height
            alt
            url
          }
          category {
            ...FunderCategory
          }
        }
      }
    }
    breadcrumb: datoCmsMenuItem(id: { eq: $menuPos }) {
      ...Breadcrumb
    }
  }
`;
