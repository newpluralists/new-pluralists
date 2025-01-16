import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import BlogCard from '../ui/components/blog-card/blog-card';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import { Breadcrumbs, Dropdown } from 'tectonica-ui';
import FilterableList from '../ui/components/filterable-list/filterable-list';
import FadeIn from '../ui/transitions/fade';
import PageLoader from '../ui/components/page-loader/page-loader';

const BlogList = ({ pageContext, data: { blogList, blogs, favicon } }) => {
  const { title, seo } = blogList;

  const yearsForFilter = React.useMemo(() => {
    const years = new Set();
    years.add('All');
    blogs.edges.forEach(({ node }) => {
      const date = new Date(node.date);
      years.add(date.getFullYear());
    });
    return Array.from(years);
  }, [blogs.edges]);

  const topicsForFilter = React.useMemo(() => {
    const topicsMap = new Map();
    topicsMap.set('All', { name: 'All', id: 'All' });

    blogs.edges.forEach(({ node }) => {
      node.topics.forEach((topic) => {
        if (!topicsMap.has(topic.id)) {
          topicsMap.set(topic.name, topic);
        }
      });
    });

    return Array.from(topicsMap.values()).sort((a, b) => {
      if (a.id === 'All') return -1;
      if (b.id === 'All') return 1;
      return a.name.localeCompare(b.name);
    });
  }, [blogs.edges]);

  const filters = [
    {
      key: 'topic',
      label: 'Filter by topic',
      FilterComponent: ({ value, title, onChange }) => (
        <Dropdown
          options={topicsForFilter.map((topic) => ({ label: topic.name, value: topic.name }))}
          onSelect={onChange}
          value={value}
          title={title}
        />
      ),
      filterFunction: (item, topic) => {
        const topics = item.node.topics;
        if (topic === 'All') return topics;
        return topics.some((t) => t.name === topic);
      },
    },
    {
      key: 'year',
      label: 'Filter by date',
      FilterComponent: ({ value, title, onChange }) => (
        <Dropdown
          options={yearsForFilter.map((year) => ({ label: year, value: year }))}
          onSelect={onChange}
          value={value}
          title={title}
        />
      ),
      filterFunction: (item, year) => {
        if (year === 'All') return true;
        const date = new Date(item.node.date);
        return date.getFullYear() === Number(year);
      },
    },
  ];

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS seo={seo} favicon={favicon} />

      <ListWrapper id="blog-list" variant="blue">
        <Breadcrumbs currentPage={title} />
        <h1>{title}</h1>

        <FilterableList
          data={blogs.edges}
          filters={filters}
          renderItem={({ node }, page) => (
            <div key={node.id} className="col-12 col-md-6 col-lg-4">
              <FadeIn style={{ height: '100%' }}>
                <BlogCard blog={node} queryParams={`?${new URLSearchParams(`page=${page}`).toString()}`} />{' '}
              </FadeIn>
            </div>
          )}
          scrollToId="blog-list"
        />
      </ListWrapper>
    </PageLoader>
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
          ...PostCard
        }
      }
    }
  }
`;
