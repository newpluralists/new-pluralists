import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';

const StoryImpactPage = ({ data: { page, favicon } }) => {
  const { title, seo } = page;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <ListWrapper variant="lavander">
        <h1>{title}</h1>
      </ListWrapper>
    </>
  );
};

export default StoryImpactPage;

export const StoryImpactPageQuery = graphql`
  query StoryImpactPageQuery($id: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    page: datoCmsStoriesImpact(id: { eq: $id }) {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
