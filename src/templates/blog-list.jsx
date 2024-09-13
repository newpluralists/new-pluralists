import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlogCard from '../ui/components/blog-card/blog-card';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import { Breadcrumbs, Dropdown } from 'tectonica-ui';
import FilterableList from '../ui/components/filterable-list/filterable-list';

const BlogList = ({ data: { blogList, blogs, favicon } }) => {
  const { title, seo } = blogList;

  const yearsForFilter = React.useMemo(() => {
    const years = new Set();
    blogs.edges.forEach(({ node }) => {
      const date = new Date(node.date);
      years.add(date.getFullYear());
    });
    return Array.from(years);
  }, [blogs.edges]);

  const filters = [
    {
      key: 'topic',
      label: 'Filter by topic',
      FilterComponent: ({ value, onChange }) => <Dropdown options={[]} onSelect={onChange} value={value} />,
      filterFunction: (item, topic) => item.node.model.apiKey === topic,
    },
    {
      key: 'year',
      label: 'Filter by date',
      FilterComponent: ({ value, onChange }) => (
        <Dropdown
          options={yearsForFilter.map((year) => ({ label: year, value: year }))}
          onSelect={onChange}
          value={value}
        />
      ),
      filterFunction: (item, year) => {
        const date = new Date(item.node.date);
        return date.getFullYear() === year;
      },
    },
  ];

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />

      <ListWrapper variant="blue">
        <Breadcrumbs currentPage={title} />
        <h1>{title}</h1>

        <FilterableList
          data={blogs.edges}
          filters={filters}
          renderItem={({ node }) => (
            <div key={node.id} className="col-12 col-md-6 col-lg-4">
              <BlogCard blog={node} />
            </div>
          )}
        />
      </ListWrapper>
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
    blogs: allDatoCmsPost(sort: { date: DESC }) {
      edges {
        node {
          id
          slug
          title
          date
          mainImage {
            url
            width
            height
            alt
          }
          model {
            apiKey
          }
        }
      }
    }
  }
`;
