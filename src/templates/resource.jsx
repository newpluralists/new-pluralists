import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import ResourceDetail from '../ui/layout/details/resource-detail';
import PageLoader from '../ui/components/page-loader/page-loader';
import { TextSizeProvider } from '../context/text-size-context';

const ResourceDetailPage = ({ pageContext, data: { resource, relatedResources, resourceList, favicon } }) => {
  const { slug, seo } = resource;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS
        seo={seo}
        favicon={favicon}
        canonicalMetadata={{
          slug: slug,
          model: 'resource',
        }}
      />
      <TextSizeProvider>
        <ResourceDetail resource={resource} listLink={resourceList} related={relatedResources} />
      </TextSizeProvider>
    </PageLoader>
  );
};

export default ResourceDetailPage;

export const ResourceDetailQuery = graphql`
  query ResourceDetailQuery($id: String, $topicIds: [String]) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    resource: datoCmsResource(id: { eq: $id }) {
      slug
      title
      date
      externalUrl
      tags {
        ...Tag
      }
      topics {
        id
        name
      }
      content {
        value
        blocks {
          __typename
          ...BlockImage
          ...BlockEmbedIframe
          ...VideoBlock
        }
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    relatedResources: allDatoCmsResource(
      filter: { id: { ne: $id }, topics: { elemMatch: { id: { in: $topicIds } } } }
      limit: 3
      sort: { date: DESC }
    ) {
      nodes {
        id
        title
        slug
        date
        introduction
        tags {
          ...Tag
        }
        topics {
          id
          name
        }
        model {
          apiKey
        }
      }
    }
    resourceList: datoCmsResourcesList {
      slug
      title
      model {
        apiKey
      }
    }
  }
`;
