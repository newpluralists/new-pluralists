import * as React from 'react';
import { graphql, Link } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';
import ListWrapper from '../ui/layout/list-wrapper/list-wrapper';
import StructuredTextDefault from '../ui/components/structured-text-default';
import { Breadcrumbs, CustomImage, FloatingShareButtons, Tags, truncateText } from 'tectonica-ui';
import PageLoader from '../ui/components/page-loader/page-loader';
import arrowIcon from '../images/button-icon-purple.svg';

const StoryImpactPage = ({ pageContext, data: { page, storiesList, favicon } }) => {
  const { slug, title, introduction, region, sector, image, content, tags, seo } = page;

  const { prevLink, nextLink } = pageContext;

  return (
    <PageLoader context={pageContext} favicon={favicon}>
      <SeoDatoCMS
        seo={seo}
        favicon={favicon}
        canonicalMetadata={{
          slug: slug,
          model: 'stories_impact',
        }}
      />
      <ListWrapper variant="lavander stories">
        <Breadcrumbs
          currentPage={truncateText(title)}
          breadcrumb={{
            title: storiesList.title,
            path: { ...storiesList, slug: `${storiesList.slug}` },
          }}
          // breadcrumb={{
          //   id: 1,
          //   title: 'Stories of Impact',
          //   path: {
          //     id: 2,
          //     slug,
          //     path: '',
          //   },
          // }}
        />
        <div className="share-buttons">
          <FloatingShareButtons />
        </div>

        <div className="basic-content">
          <div className="story-image-wrapper">
            <CustomImage image={image} />
            <div className="metadata-wrapper">
              <h1>{title}</h1>
              {region && (
                <span>
                  <b>Region:</b> {region}
                </span>
              )}
              {sector && (
                <span>
                  <b>Sector:</b> {sector}
                </span>
              )}
              {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
            </div>
          </div>
          <StructuredTextDefault content={content} />

          <div className="change-story-wrapper">
            {prevLink && (
              <Link to={prevLink} className="prev">
                <img src={arrowIcon} alt="Previous story" />
                PREVIOUS STORY
              </Link>
            )}
            {nextLink && (
              <Link to={nextLink} className="next">
                NEXT STORY
                <img src={arrowIcon} alt="Next story" />
              </Link>
            )}
          </div>
        </div>
      </ListWrapper>
    </PageLoader>
  );
};

export default StoryImpactPage;

export const StoryImpactPageQuery = graphql`
  query StoryImpactPageQuery($id: String) {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    page: datoCmsStoriesImpact(id: { eq: $id }) {
      slug
      title
      introduction
      region
      sector
      image {
        width
        height
        alt
        url
      }
      content {
        value
        blocks {
          __typename
          ...BlockImage
          ...BlockCta
          ...BlockUpdates
          ...BlockResources
          ...BlockImageGrid
        }
      }
      tags {
        ...Tag
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    storiesList: datoCmsStoriesOfImpactList {
      id
      slug
      title
      model {
        apiKey
      }
    }
  }
`;
