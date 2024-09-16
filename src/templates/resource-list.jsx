import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Breadcrumbs, Dropdown } from 'tectonica-ui';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import FilterableList from '../ui/components/filterable-list/filterable-list';
import ResourceCard from '../ui/components/resource-card/resource-card';

const ResourceList = ({ data: { resourceList, resources, favicon } }) => {
  const { title, seo } = resourceList;

  const yearsForFilter = React.useMemo(() => {
    const years = new Set();
    resources.edges.forEach(({ node }) => {
      const date = new Date(node.date);
      years.add(date.getFullYear());
    });
    return Array.from(years);
  }, [resources.edges]);

  const topicsForFilter = React.useMemo(() => {
    const topics = new Set();
    resources.edges.forEach(({ node }) => {
      node.topics.forEach((topic) => topics.add(topic));
    });
    return Array.from(topics);
  }, [resources.edges]);

  const filters = [
    {
      key: 'topic',
      label: 'Filter by topic',
      FilterComponent: ({ value, onChange }) => (
        <Dropdown
          options={topicsForFilter.map((topic) => ({ label: topic.name, value: topic.id }))}
          onSelect={onChange}
          value={value}
        />
      ),
      filterFunction: (item, topic) => {
        const topics = item.node.topics;
        return topics.some((t) => t.id === topic);
      },
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

      <ListWrapper variant="lavander">
        <Breadcrumbs currentPage={title} />
        <h1>{title}</h1>

        <FilterableList
          data={resources.edges}
          filters={filters}
          renderItem={({ node }) => (
            <div key={node.id} className="col-12 col-md-6 col-lg-4">
              <ResourceCard resource={node} />
            </div>
          )}
        />
      </ListWrapper>
    </>
  );
};

export default ResourceList;

export const ResourceListQuery = graphql`
  query ResourceListQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    resourceList: datoCmsResourcesList {
      title
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    resources: allDatoCmsResource {
      edges {
        node {
          id
          title
          slug
          date
          tags {
            ...Tag
          }
          topics {
            ...Topic
          }
          model {
            apiKey
          }
        }
      }
    }
  }
`;
