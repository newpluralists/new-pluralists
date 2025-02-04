const configDotenv = require('dotenv').config;
configDotenv({ path: `.env` });

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `New Pluralists`,
    siteUrl: `https://newpluralists.org/`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
        previewMode: process.env.NODE_ENV !== 'production',
        disableLiveReload: false,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-fix-fouc',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://newpluralists.org',
        sitemap: 'https://newpluralists.org/sitemap-0.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            allDatoCmsBasicPage {
              nodes {
                slug
                meta {
                  publishedAt
                }
              }
            }
            datoCmsBlogPostsList {
              id
              slug
              meta {
                publishedAt
              }
            }
            allDatoCmsPost {
              nodes {
                slug
                meta {
                  publishedAt
                }
              }
            }
            datoCmsFundersList {
              slug
              meta {
                publishedAt
              }
            }
            allDatoCmsFunder {
              nodes {
                slug
                meta {
                  publishedAt
                }
              }
            }
            datoCmsInvestmentsList {
              slug
              meta {
                publishedAt
              }
            }
            allDatoCmsInvestment {
              nodes {
                slug
                meta {
                  publishedAt
                }
              }
            }
            datoCmsResourcesList {
              slug
              meta {
                publishedAt
              }
            }
            allDatoCmsResource {
              nodes {
                slug
                meta {
                  publishedAt
                }
              }
            }
            datoCmsFieldBuildersList {
              slug
              meta {
                publishedAt
              }
            }
            allDatoCmsBuilder {
              nodes {
                slug
                meta {
                  publishedAt
                }
              }
            }
            datoCmsTeamList {
              slug
              meta {
                publishedAt
              }
            }
            datoCmsEventList {
              slug
              meta {
                publishedAt
              }
            }
            allDatoCmsEvent {
              nodes {
                slug
                meta {
                  publishedAt
                }
              }
            }
            datoCmsThePromiseOfPluralism {
              slug
              meta {
                publishedAt
              }
            }
            datoCmsOurImpact {
              slug
              meta {
                publishedAt
              }
            }
            allDatoCmsStoriesImpact {
              nodes {
                slug
                meta {
                  publishedAt
                }
              }
            }
            datoCmsGranteesList {
              slug
              meta {
                publishedAt
              }
            }
          }
        `,
        resolveSiteUrl: () => 'https://newpluralists.org',
        resolvePages: (resolve) => {
          const {
            allDatoCmsBasicPage,
            datoCmsBlogPostsList,
            allDatoCmsPost,
            datoCmsFundersList,
            allDatoCmsFunder,
            datoCmsInvestmentsList,
            allDatoCmsInvestment,
            datoCmsResourcesList,
            allDatoCmsResource,
            datoCmsFieldBuildersList,
            allDatoCmsBuilder,
            datoCmsTeamList,
            datoCmsEventList,
            allDatoCmsEvent,
            datoCmsThePromiseOfPluralism,
            datoCmsOurImpact,
            allDatoCmsStoriesImpact,
            datoCmsGranteesList,
          } = resolve;

          const allSlugs = [
            ...allDatoCmsBasicPage.nodes.map((node) => ({
              path: `/${node.slug}`,
              lastMod: node.meta.publishedAt,
            })),
            datoCmsBlogPostsList.slug
              ? {
                  path: `/${datoCmsBlogPostsList.slug}`,
                  lastMod: datoCmsBlogPostsList.meta.publishedAt,
                }
              : null,
            ...allDatoCmsPost.nodes.map((node) => ({
              path: `/blogs/${node.slug}`,
              lastMod: node.meta.publishedAt,
            })),
            datoCmsFundersList.slug
              ? {
                  path: `/${datoCmsFundersList.slug}`,
                  lastMod: datoCmsFundersList.meta.publishedAt,
                }
              : null,
            ...allDatoCmsFunder.nodes.map((node) => ({
              path: `/funders/${node.slug}`,
              lastMod: node.meta.publishedAt,
            })),
            datoCmsInvestmentsList.slug
              ? {
                  path: `/${datoCmsInvestmentsList.slug}`,
                  lastMod: datoCmsInvestmentsList.meta.publishedAt,
                }
              : null,
            ...allDatoCmsInvestment.nodes.map((node) => ({
              path: `/${node.slug}`,
              lastMod: node.meta.publishedAt,
            })),
            datoCmsResourcesList.slug
              ? {
                  path: `/${datoCmsResourcesList.slug}`,
                  lastMod: datoCmsResourcesList.meta.publishedAt,
                }
              : null,
            ...allDatoCmsResource.nodes.map((node) => ({
              path: `/resources/${node.slug}`,
              lastMod: node.meta.publishedAt,
            })),
            datoCmsFieldBuildersList.slug
              ? {
                  path: `/${datoCmsFieldBuildersList.slug}`,
                  lastMod: datoCmsFieldBuildersList.meta.publishedAt,
                }
              : null,
            ...allDatoCmsBuilder.nodes.map((node) => ({
              path: `/builders/${node.slug}`,
              lastMod: node.meta.publishedAt,
            })),
            datoCmsTeamList.slug
              ? {
                  path: `/${datoCmsTeamList.slug}`,
                  lastMod: datoCmsTeamList.meta.publishedAt,
                }
              : null,
            datoCmsEventList.slug
              ? {
                  path: `/${datoCmsEventList.slug}`,
                  lastMod: datoCmsEventList.meta.publishedAt,
                }
              : null,
            ...allDatoCmsEvent.nodes.map((node) => ({
              path: `/events/${node.slug}`,
              lastMod: node.meta.publishedAt,
            })),
            datoCmsThePromiseOfPluralism.slug
              ? {
                  path: `/${datoCmsThePromiseOfPluralism.slug}`,
                  lastMod: datoCmsThePromiseOfPluralism.meta.publishedAt,
                }
              : null,
            datoCmsOurImpact.slug
              ? {
                  path: `/${datoCmsOurImpact.slug}`,
                  lastMod: datoCmsOurImpact.meta.publishedAt,
                }
              : null,
            ...allDatoCmsStoriesImpact.nodes.map((node) => ({
              path: `/stories/${node.slug}`,
              lastMod: node.meta.publishedAt,
            })),
            datoCmsGranteesList.slug
              ? {
                  path: `/${datoCmsGranteesList.slug}`,
                  lastMod: datoCmsGranteesList.meta.publishedAt,
                }
              : null,
          ].filter(Boolean);

          return allSlugs;
        },
        serialize: ({ path, lastMod }) => {
          return {
            url: path,
            lastmod: lastMod,
          };
        },
      },
    },
  ],
};
