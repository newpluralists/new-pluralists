import * as React from 'react';
import { graphql } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import { Dropdown } from 'tectonica-ui';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import FilterableList from '../ui/components/filterable-list/filterable-list';
import ResourceCard from '../ui/components/resource-card/resource-card';
import SpecialHero from '../ui/layout/special-hero/special-hero';
import FadeIn from '../ui/transitions/fade';
import PageLoader from '../ui/components/page-loader/page-loader';

const ResourceList = ({ pageContext, data: { resourceList, resources, breadcrumb, favicon } }) => {
  const { slug, title, introduction, image, seo } = resourceList;

  const topicsForFilter = React.useMemo(() => {
    const topicsMap = new Map();
    topicsMap.set('All', { name: 'All', id: 'All' });

    resources.edges.forEach(({ node }) => {
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
  }, [resources.edges]);

  const filters = [
    {
      key: 'topic',
      label: 'Where would you like to start learning about pluralism?',
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
  ];

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
      <SpecialHero
        title={title}
        introduction={introduction}
        image={image}
        largeBgImage={image}
        breadcrumb={breadcrumb}
        variant="resources"
      />

      <ListWrapper id="resource-list" hideSvg variant="lavander resources">
        <FilterableList
          data={resources.edges}
          filters={filters}
          applyLabel="View"
          resetLabel="Reset"
          renderItem={({ node }, page) => {
            return (
              <div key={node.id} className="col-12 col-md-6 col-lg-4">
                <FadeIn>
                  <ResourceCard resource={node} queryParams={`?${new URLSearchParams(`page=${page}`).toString()}`} />
                </FadeIn>
              </div>
            );
          }}
          scrollToId="resource-list"
        />
      </ListWrapper>
    </PageLoader>
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
      slug
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
    resources: allDatoCmsResource(sort: { date: DESC }) {
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
