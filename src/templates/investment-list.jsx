import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';

const InvestmentList = ({ data: { investmentList, favicon } }) => {
  const { title, seo } = investmentList;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <BlockBuilder components={[]} />
    </>
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
