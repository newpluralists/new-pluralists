import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import StructuredTextDefault from '../ui/components/structured-text-default';
import { CustomImage, Tags } from 'tectonica-ui';
import PageLoader from '../ui/components/page-loader/page-loader';

const StoryImpactPage = ({ pageContext, data: { page, favicon } }) => {
  const { slug, title, image, content, tags, seo } = page;

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
      <ListWrapper variant="lavander stories">
        <h1>{title}</h1>
        <div className="basic-content">
          <CustomImage image={image} />
          <StructuredTextDefault content={content} />
          <Tags tags={tags} />
        </div>
      </ListWrapper>
    </PageLoader>
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
      slug
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
