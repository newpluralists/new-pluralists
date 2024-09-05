import * as React from 'react';
import { graphql, Link } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlockBuilder from '../ui/components/block-builder';
import { Hero } from 'tectonica-ui';

const BlogList = ({ data: { blogList, blogs, favicon } }) => {
  const { title, seo } = blogList;

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <Hero title={title} />
      <div className="container">
        <div className="row g-5 mt-5">
          {blogs.edges.map(({ node }) => (
            <div key={node.id} className="col-12 col-md-6 col-lg-4">
              <div className="funder-card">
                {node.mainImage && <img src={node.mainImage.url} alt={node.mainImage.alt} className="img-full" />}
                <div className="card-body">
                  <h5 className="card-title">{node.title}</h5>
                  <p className="card-text">{node.funderPosition}</p>
                  <Link to={`/blogs/${node.slug}`} className="btn btn-primary">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BlockBuilder components={[]} />
      </div>
    </>
  );
};

export default BlogList;

export const BlogListQuery = graphql`
  query BlogListQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blogList: datoCmsBlogPostsList {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    blogs: allDatoCmsPost {
      edges {
        node {
          id
          slug
          title
          mainImage {
            url
            width
            height
            alt
          }
        }
      }
    }
  }
`;
