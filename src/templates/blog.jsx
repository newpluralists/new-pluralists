import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlogDetail from '../ui/layout/details/blog-detail';
import PageLoader from '../ui/components/page-loader/page-loader';
import { TextSizeProvider } from '../context/text-size-context';

const BlogDetailPage = ({ pageContext, data: { blog, related, blogList, favicon } }) => {
  const { slug, seo } = blog;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS
        seo={seo}
        favicon={favicon}
        canonicalMetadata={{
          slug: slug,
          model: 'post',
        }}
      />
      <TextSizeProvider>
        <BlogDetail blog={blog} related={related} listLink={blogList} />
      </TextSizeProvider>
    </PageLoader>
  );
};

export default BlogDetailPage;

export const BlogDetailQuery = graphql`
  query BlogDetailQuery($id: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsPost(id: { eq: $id }) {
      slug
      title
      date
      mainImage {
        width
        height
        alt
        url
        title
      }
      tags {
        ...Tag
      }
      topics {
        ...Topic
      }
      authorName
      content {
        value
        blocks {
          __typename
          ...BlockImage
          ...BlockEmbedIframe
        }
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    related: allDatoCmsPost(filter: { id: { ne: $id } }, limit: 3, sort: { date: DESC }) {
      nodes {
        id
        title
        slug
        date
        mainImage {
          alt
          url
        }
        model {
          apiKey
        }
      }
    }
    blogList: datoCmsBlogPostsList {
      id
      slug
      title
      model {
        apiKey
      }
    }
  }
`;
