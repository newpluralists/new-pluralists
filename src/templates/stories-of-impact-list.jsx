import React from 'react';
import PageLoader from '../ui/components/page-loader/page-loader';
import SeoDatoCMS from '../ui/components/seo-datocms';
import SpecialHero from '../ui/layout/special-hero/special-hero';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import FilterableList from '../ui/components/filterable-list/filterable-list';
import FadeIn from '../ui/transitions/fade';
import { graphql } from 'gatsby';
import { Dropdown } from 'tectonica-ui';
import StoryCard from '../ui/components/story-card/story-card';

const StoriesOfImpactList = ({ pageContext, data: { storiesImpactList, stories, breadcrumb, favicon } }) => {
  const { slug, title, introduction, backgroundImage, seo } = storiesImpactList;

  const regionsForFilter = React.useMemo(() => {
    const topicsMap = new Map();
    topicsMap.set('All', { name: 'All', id: 'All' });

    stories.edges.forEach(({ node }) => {
      if (node.region) topicsMap.set(node.region, { name: node.region });
    });

    return Array.from(topicsMap.values()).sort((a, b) => {
      if (a.id === 'All') return -1;
      if (b.id === 'All') return 1;
      return a.name.localeCompare(b.name);
    });
  }, [stories.edges]);

  const sectorsForFilter = React.useMemo(() => {
    const topicsMap = new Map();
    topicsMap.set('All', { name: 'All', id: 'All' });

    stories.edges.forEach(({ node }) => {
      if (node.sector) topicsMap.set(node.sector, { name: node.sector });
    });

    return Array.from(topicsMap.values()).sort((a, b) => {
      if (a.id === 'All') return -1;
      if (b.id === 'All') return 1;
      return a.name.localeCompare(b.name);
    });
  }, [stories.edges]);

  const filters = [
    {
      key: 'type',
      label: 'Filter by type',
      FilterComponent: ({ value, title, onChange }) => (
        <Dropdown options={[]} onSelect={onChange} value={value} title={title} />
      ),
      filterFunction: (item, topic) => {
        const topics = item.node.topics;
        if (topic === 'All') return topics;
        return topics.some((t) => t.name === topic);
      },
    },
    {
      key: 'region',
      label: 'Filter by region',
      FilterComponent: ({ value, title, onChange }) => (
        <Dropdown
          options={regionsForFilter.map((topic) => ({ label: topic.name, value: topic.name }))}
          onSelect={onChange}
          value={value}
          title={title}
        />
      ),
      filterFunction: (item, region) => {
        const nodeRegion = item.node.region;
        if (region === 'All') return nodeRegion;
        return nodeRegion === region;
      },
    },
    {
      key: 'sector',
      label: 'Filter by sector',
      FilterComponent: ({ value, title, onChange }) => (
        <Dropdown
          options={sectorsForFilter.map((topic) => ({ label: topic.name, value: topic.name }))}
          onSelect={onChange}
          value={value}
          title={title}
        />
      ),
      filterFunction: (item, sector) => {
        const nodeSector = item.node.sector;
        if (sector === 'All') return nodeSector;
        return nodeSector === sector;
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
        image={backgroundImage}
        largeBgImage={backgroundImage}
        breadcrumb={breadcrumb}
        variant="yellow"
      />

      <ListWrapper id="impact-list" hideSvg variant="impact">
        <FilterableList
          data={stories.edges}
          filters={filters}
          applyLabel="Filter"
          resetLabel="Reset"
          renderItem={({ node }, page) => {
            return (
              <div key={node.id} className="col-12 col-md-6 col-lg-4">
                <FadeIn style={{ height: '100%' }}>
                  <StoryCard story={node} />
                </FadeIn>
              </div>
            );
          }}
          scrollToId="impact-list"
        />
      </ListWrapper>
    </PageLoader>
  );
};

export default StoriesOfImpactList;

export const StoriesImpactListQuery = graphql`
  query StoriesImpactQuery($menuPos: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    storiesImpactList: datoCmsStoriesOfImpactList {
      slug
      title
      introduction
      backgroundImage {
        width
        height
        alt
        url
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    stories: allDatoCmsStoriesImpact(sort: { title: ASC }) {
      edges {
        node {
          ...StoryImpactCard
        }
      }
    }
    breadcrumb: datoCmsMenuItem(id: { eq: $menuPos }) {
      ...Breadcrumb
    }
  }
`;
