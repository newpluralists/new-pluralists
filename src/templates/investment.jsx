import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Hero } from 'tectonica-ui';
import PageLoader from '../ui/components/page-loader/page-loader';

const InvestmentDetail = ({ pageContext, data: { investment, favicon } }) => {
  const { title, seo } = investment;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
    </PageLoader>
  );
};

export default InvestmentDetail;

export const InvestmentDetailQuery = graphql`
  query InvestmentDetailQuery($id: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    investment: datoCmsInvestment(id: { eq: $id }) {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
