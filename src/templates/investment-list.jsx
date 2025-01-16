import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';
import PageLoader from '../ui/components/page-loader/page-loader';

const InvestmentList = ({ pageContext, data: { investmentList, favicon } }) => {
  const { title, seo } = investmentList;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <BlockBuilder components={[]} />
    </PageLoader>
  );
};

export default InvestmentList;

export const InvestmentListQuery = graphql`
  query InvestmentListQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    investmentList: datoCmsInvestmentsList {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
