import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import StructuredTextDefault from '../ui/components/structured-text-default';
import { CustomImage, Tags } from 'tectonica-ui';
import Layout from '../ui/layout/layout';

const StoryImpactPage = ({ data: { page, favicon } }) => {
  const { title, image, content, tags, seo } = page;

  return (
    <Layout>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <ListWrapper variant="lavander stories">
        <h1>{title}</h1>
        <div className="basic-content">
          <CustomImage image={image} />
          <StructuredTextDefault content={content} />
          <Tags tags={tags} />
        </div>
      </ListWrapper>
    </Layout>
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
      image {
        width
        height
        alt
        url
      }
      content {
        value
      }
      tags {
        ...Tag
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
