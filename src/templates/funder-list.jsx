import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import FunderCard from '../ui/components/funder-card/funder-card';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import { Breadcrumbs, isArrayAndNotEmpty } from 'tectonica-ui';
import BlocksBuilder from '../ui/components/block-builder';
import DonorCard from '../ui/components/donor-card/donor-card';
import FadeIn from '../ui/transitions/fade';

const FunderList = ({ data: { funderList, funders, donors, breadcrumb, favicon } }) => {
  const { title, introduction, blocks = [], seo } = funderList;

  const sortedFunders = funders.edges
    .map((e) => e.node)
    .sort((a, b) => {
      const nameA = a.name.replace(/^The\s+/i, '');
      const nameB = b.name.replace(/^The\s+/i, '');
      return nameA.localeCompare(nameB);
    });

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <ListWrapper variant="funder-list">
        {/* <Breadcrumbs breadcrumb={breadcrumb} currentPage={title} /> */}
        <h1 className="small">{title}</h1>
        {introduction && (
          <div className="basic-content">
            <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />
          </div>
        )}

        <div className="row mb-5">
          {sortedFunders.map((funder) => (
            <div key={funder.id} className="col-12 col-md-6 col-lg-3">
              <FadeIn>
                <FunderCard funder={funder} />
              </FadeIn>
            </div>
          ))}

          {isArrayAndNotEmpty(donors.edges) && (
            <div className="col-12 row">
              {donors.edges.map((donor) => (
                <div key={donor.id} className="col-12 col-md-6 col-lg-4">
                  <FadeIn>
                    <DonorCard donor={donor} />
                  </FadeIn>
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
      introduction
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
