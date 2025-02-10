import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import FunderCard from '../ui/components/funder-card/funder-card';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import { Breadcrumbs, isArrayAndNotEmpty } from 'tectonica-ui';
import BlocksBuilder from '../ui/components/block-builder';
import DonorCard from '../ui/components/donor-card/donor-card';
import FadeIn from '../ui/transitions/fade';
import PageLoader from '../ui/components/page-loader/page-loader';

const FunderList = ({ pageContext, data: { funderList, funders, donors, breadcrumb, favicon } }) => {
  const { slug, title, introduction, blocks = [], seo } = funderList;

  const sortedFunders = funders.edges
    .map((e) => e.node)
    .sort((a, b) => {
      const nameA = a.lastName.replace(/^The\s+/i, '');
      const nameB = b.lastName.replace(/^The\s+/i, '');
      return nameA.localeCompare(nameB);
    });

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
    </PageLoader>
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
      slug
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
          ...FunderCard
        }
      }
    }
    donors: allDatoCmsIndividualDonor {
      edges {
        node {
          ...DonorCard
        }
      }
    }
    breadcrumb: datoCmsMenuItem(id: { eq: $menuPos }) {
      ...Breadcrumb
    }
  }
`;
