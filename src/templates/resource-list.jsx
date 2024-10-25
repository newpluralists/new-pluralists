import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Dropdown } from 'tectonica-ui';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import FilterableList from '../ui/components/filterable-list/filterable-list';
import ResourceCard from '../ui/components/resource-card/resource-card';
import SpecialHero from '../ui/layout/special-hero/special-hero';

const ResourceList = ({ data: { resourceList, resources, breadcrumb, favicon } }) => {
  const { title, introduction, image, seo } = resourceList;

  const topicsForFilter = React.useMemo(() => {
    const topics = new Set();
    topics.add({ name: 'All', id: 'All' });
    resources.edges.forEach(({ node }) => {
      node.topics.forEach((topic) => topics.add(topic));
    });
    return Array.from(topics);
  }, [resources.edges]);

  const filters = [
    {
      key: 'topic',
      label: 'Where would you like to start learning about pluralism?',
      FilterComponent: ({ value, onChange }) => (
        <Dropdown
          options={topicsForFilter.map((topic) => ({ label: topic.name, value: topic.id }))}
          onSelect={onChange}
          value={value}
        />
      ),
      filterFunction: (item, topic) => {
        const topics = item.node.topics;
        if (topic === 'All') return topics;
        return topics.some((t) => t.id === topic);
      },
    },
  ];

  return (
    <>
      <SeoDatoCMS seo={seo} favicon={favicon} />
      <SpecialHero
        title={title}
        introduction={introduction}
        image={image}
        breadcrumb={breadcrumb}
        variant="resources"
      />

      <ListWrapper hideSvg variant="lavander resources">
        <FilterableList
          data={resources.edges}
          filters={filters}
          applyLabel="View"
          resetLabel="Reset"
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
  query ResourceListQuery($menuPos: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    resourceList: datoCmsResourcesList {
      title
      introduction
      image {
        width
        height
        alt
        url
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    resources: allDatoCmsResource {
      edges {
        node {
          ...ResourceCard
        }
      }
    }
    breadcrumb: datoCmsMenuItem(id: { eq: $menuPos }) {
      ...Breadcrumb
    }
  }
`;
