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
  trailingSlash: 'ignore',
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
    'gatsby-plugin-fix-fouc',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        // id: process.env.GTM_ID,
        id: 'GTM-N56XXCX',
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: process.env.GA4_ID,
        trackingId: 'G-K65VQ8B9SK',
        head: false,
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
            datoCmsTeamList {
              slug
              meta {
                publishedAt
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
            datoCmsResourcesList,
            allDatoCmsResource,
            datoCmsTeamList,
            datoCmsThePromiseOfPluralism,
            datoCmsOurImpact,
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
            datoCmsTeamList.slug
              ? {
                  path: `/${datoCmsTeamList.slug}`,
                  lastMod: datoCmsTeamList.meta.publishedAt,
                }
              : null,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://use.typekit.net', 'https://www.datocms-assets.com'],
      },
    },
  ],
};
