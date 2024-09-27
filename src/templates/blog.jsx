import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlogDetail from '../ui/layout/details/blog-detail';
import Layout from '../ui/layout/layout';

const BlogDetailPage = ({ data: { blog, related, blogList, favicon } }) => {
  const { seo } = blog;

  return (
    <Layout>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <BlogDetail blog={blog} related={related} listLink={blogList} />
    </Layout>
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
