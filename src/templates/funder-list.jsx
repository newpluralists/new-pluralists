import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import FunderCard from '../ui/components/funder-card/funder-card';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import { Breadcrumbs, isArrayAndNotEmpty } from 'tectonica-ui';
import BlocksBuilder from '../ui/components/block-builder';
import DonorCard from '../ui/components/donor-card/donor-card';

const FunderList = ({ data: { funderList, funders, donors, breadcrumb, favicon } }) => {
  const { title, blocks = [], seo } = funderList;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <ListWrapper variant="funder-list">
        {/* <Breadcrumbs breadcrumb={breadcrumb} currentPage={title} /> */}
        <h1>{title}</h1>

        <div className="row mb-5">
          {funders.edges.map(({ node: funder }) => (
            <div key={funder.id} className="col-12 col-md-6 col-lg-3">
              <FunderCard funder={funder} />
            </div>
          ))}

          {isArrayAndNotEmpty(donors.edges) && (
            <div className="col-12 row">
              {donors.edges.map((donor) => (
                <div key={donor.id} className="col-12 col-md-6 col-lg-4">
                  <DonorCard donor={donor} />
                </div>
              ))}
            </div>
          )}
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
    funders: allDatoCmsFunderLogo(sort: { name: ASC }) {
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
    donors: allDatoCmsIndividualDonor {
      edges {
        node {
          id
          fullname
          information
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
