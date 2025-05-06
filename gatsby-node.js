const path = require('path');
const bcrypt = require('bcryptjs');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const getURL = (rawUrl) => {
  const urlObj = new URL(rawUrl);
  return urlObj.pathname;
};

const getMenuPosition = (menus, key) => {
  const menuId = menus.find((item) => item?.treeChildren.find((t) => t.path?.id === key));
  return menuId?.id ? menuId.id : '';
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  const pageTemplate = path.resolve('./src/templates/page.jsx');
  const blogListTemplate = path.resolve('./src/templates/blog-list.jsx');
  const blogTemplate = path.resolve('./src/templates/blog.jsx');
  const funderListTemplate = path.resolve('./src/templates/funder-list.jsx');
  // const funderTemplate = path.resolve('./src/templates/funder.jsx');
  // const investmentListTemplate = path.resolve('./src/templates/investment-list.jsx');
  // const investmentTemplate = path.resolve('./src/templates/investment.jsx');
  const resourceListTemplate = path.resolve('./src/templates/resource-list.jsx');
  const resourceTemplate = path.resolve('./src/templates/resource.jsx');
  const builderListTemplate = path.resolve('./src/templates/builder-list.jsx');
  // const builderTemplate = path.resolve('./src/templates/builder.jsx');
  const teamListTemplate = path.resolve('./src/templates/team-list.jsx');
  // const teamTemplate = path.resolve('./src/templates/team.jsx');
  // const eventListTemplate = path.resolve('./src/templates/events-list.jsx');
  // const eventTemplate = path.resolve('./src/templates/event.jsx');
  const thePromiseOfPluralismTemplate = path.resolve('./src/templates/the-promise-of-pluralism.jsx');
  const ourImpactTemplate = path.resolve('./src/templates/our-impact.jsx');
  const storiesTemplate = path.resolve('./src/templates/stories.jsx');
  const granteeListTemplate = path.resolve('./src/templates/grantees-list.jsx');
  const homeTemplate = path.resolve('./src/templates/home.jsx');

  const result = await graphql(`
    query AllBasicPages {
      configuration: datoCmsConfiguration {
        protected
        password
      }
      redirects: allDatoCmsRedirect {
        edges {
          node {
            id
            from
            to
          }
        }
      }
      datoCmsHomepage {
        id
      }
      allDatoCmsBasicPage {
        edges {
          node {
            id
            slug
          }
        }
      }
      datoCmsBlogPostsList {
        id
        slug
      }
      allDatoCmsPost {
        edges {
          node {
            id
            slug
            oldUrl
          }
        }
      }
      datoCmsFundersList {
        id
        slug
      }
      allDatoCmsFunder {
        edges {
          node {
            id
            slug
            oldUrl
          }
        }
      }
      datoCmsInvestmentsList {
        id
        slug
      }
      allDatoCmsInvestment {
        edges {
          node {
            id
            slug
          }
        }
      }
      datoCmsResourcesList {
        id
        slug
      }
      allDatoCmsResource {
        edges {
          node {
            id
            slug
            topics {
              id
            }
          }
        }
      }
      datoCmsFieldBuildersList {
        id
        slug
      }
      allDatoCmsBuilder {
        edges {
          node {
            id
            slug
            oldUrl
          }
        }
      }
      datoCmsTeamList {
        id
        slug
      }
      datoCmsEventList {
        id
        slug
      }
      allDatoCmsEvent {
        edges {
          node {
            id
            slug
          }
        }
      }
      datoCmsThePromiseOfPluralism {
        id
        slug
      }
      datoCmsOurImpact {
        id
        slug
      }
      allDatoCmsStoriesImpact {
        edges {
          node {
            id
            slug
          }
        }
      }
      datoCmsGranteesList {
        id
        slug
      }
      navTree: allDatoCmsMenuItem {
        nodes {
          id
          treeChildren {
            path {
              ... on DatoCmsBasicPage {
                id
              }
              ... on DatoCmsBlogPostsList {
                id
              }
              ... on DatoCmsPost {
                id
              }
              ... on DatoCmsInvestmentsList {
                id
              }
              ... on DatoCmsInvestment {
                id
              }
              ... on DatoCmsFieldBuildersList {
                id
              }
              ... on DatoCmsBuilder {
                id
              }
              ... on DatoCmsFundersList {
                id
              }
              ... on DatoCmsFunder {
                id
              }
              ... on DatoCmsResource {
                id
              }
              ... on DatoCmsResourcesList {
                id
              }
              ... on DatoCmsEventList {
                id
              }
              ... on DatoCmsTeamList {
                id
              }
              ... on DatoCmsOurImpact {
                id
              }
              ... on DatoCmsStoriesImpact {
                id
              }
              ... on DatoCmsThePromiseOfPluralism {
                id
              }
              ... on DatoCmsGranteesList {
                id
              }
            }
          }
        }
      }
    }
  `);
  const navTree = result.data.navTree.nodes;

  // Configuration options
  const config = {
    protected: result.data.configuration.protected,
    password: bcrypt.hashSync(result.data.configuration.password, 10),
  };

  // Home page
  createPage({
    path: '/',
    component: homeTemplate,
    context: {
      config,
    },
  });

  // Basic pages
  result.data.allDatoCmsBasicPage.edges.forEach(({ node }) => {
    const { id, slug } = node;

    createPage({
      path: slug,
      component: pageTemplate,
      context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
    });
  });

  // Blog List
  if (result.data.datoCmsBlogPostsList) {
    const { id, slug } = result.data.datoCmsBlogPostsList;

    createPage({
      path: slug,
      component: blogListTemplate,
      context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
    });
  }

  // Blog Posts
  result.data.allDatoCmsPost.edges.forEach(({ node }) => {
    const { id, slug, oldUrl } = node;

    createPage({
      path: `/blogs/${slug}`,
      component: blogTemplate,
      context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
    });

    // Redirects
    if (oldUrl) {
      createRedirect({
        fromPath: getURL(oldUrl),
        toPath: `/blogs/${slug}`,
        isPermanent: true,
      });
    }
  });

  // Funder List
  if (result.data.datoCmsFundersList) {
    const { id, slug } = result.data.datoCmsFundersList;

    createPage({
      path: slug,
      component: funderListTemplate,
      context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
    });
  }

  // Funder Pages
  // result.data.allDatoCmsFunder.edges.forEach(({ node }) => {
  //   const { id, slug, oldUrl } = node;

  //   createPage({
  //     path: `/funders/${slug}`,
  //     component: funderTemplate,
  //     context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
  //   });

  //   // Redirects
  //   if (oldUrl) {
  //     createRedirect({
  //       fromPath: getURL(oldUrl),
  //       toPath: `/funders/${slug}`,
  //       isPermanent: true,
  //     });
  //   }
  // });

  // Investment List
  // if (result.data.datoCmsInvestmentsList) {
  //   const { id, slug } = result.data.datoCmsInvestmentsList;

  //   createPage({
  //     path: slug,
  //     component: investmentListTemplate,
  //     context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
  //   });
  // }

  // Investment Pages
  // result.data.allDatoCmsInvestment.edges.forEach(({ node }) => {
  //   const { id, slug } = node;

  //   createPage({
  //     path: `/investments/${slug}`,
  //     component: investmentTemplate,
  //     context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
  //   });
  // });

  // Resource List
  if (result.data.datoCmsResourcesList) {
    const { id, slug } = result.data.datoCmsResourcesList;

    createPage({
      path: slug,
      component: resourceListTemplate,
      context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
    });
  }

  // Resource Pages
  result.data.allDatoCmsResource.edges.forEach(({ node }) => {
    const { id, slug, topics } = node;

    createPage({
      path: `/resources/${slug}`,
      component: resourceTemplate,
      context: {
        id: id,
        slug: slug,
        topicIds: topics.map((t) => t.id),
        menuPos: getMenuPosition(navTree, id),
        config,
      },
    });
  });

  // Field Builders List
  // if (result.data.datoCmsFieldBuildersList) {
  //   const { id, slug } = result.data.datoCmsFieldBuildersList;

  //   createPage({
  //     path: slug,
  //     component: builderListTemplate,
  //     context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
  //   });
  // }

  // Field Builders Pages
  // result.data.allDatoCmsBuilder.edges.forEach(({ node }) => {
  //   const { id, slug, oldUrl } = node;

  //   createPage({
  //     path: `/builders/${slug}`,
  //     component: builderTemplate,
  //     context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
  //   });

  //   // Redirects
  //   if (oldUrl) {
  //     createRedirect({
  //       fromPath: getURL(oldUrl),
  //       toPath: `/builders/${slug}`,
  //       isPermanent: true,
  //     });
  //   }
  // });

  // Team List
  if (result.data.datoCmsTeamList) {
    const { id, slug } = result.data.datoCmsTeamList;

    createPage({
      path: slug,
      component: teamListTemplate,
      context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
    });
  }

  // Team Pages
  // result.data.allDatoCmsTeam.edges.forEach(({ node }) => {
  //   const { id, slug, oldUrl } = node;

  //   createPage({
  //     path: `/team/${slug}`,
  //     component: teamTemplate,
  //     context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config, },
  //   });

  //   // Redirects
  //   if (oldUrl) {
  //     createRedirect({
  //       fromPath: getURL(oldUrl),
  //       toPath: `/team/${slug}`,
  //       isPermanent: true,
  //     });
  //   }
  // });

  // Events List
  // if (result.data.datoCmsEventList) {
  //   const { id, slug } = result.data.datoCmsEventList;

  //   createPage({
  //     path: slug,
  //     component: eventListTemplate,
  //     context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
  //   });
  // }

  // Events Pages
  // result.data.allDatoCmsEvent.edges.forEach(({ node }) => {
  //   const { id, slug, oldUrl } = node;

  //   createPage({
  //     path: `/events/${slug}`,
  //     component: eventTemplate,
  //     context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
  //   });

  //   // Redirects
  //   if (oldUrl) {
  //     createRedirect({
  //       fromPath: getURL(oldUrl),
  //       toPath: `/events/${slug}`,
  //       isPermanent: true,
  //     });
  //   }
  // });

  // The Promise of Pluralism
  if (result.data.datoCmsThePromiseOfPluralism) {
    const { id, slug } = result.data.datoCmsThePromiseOfPluralism;
    createPage({
      path: slug,
      component: thePromiseOfPluralismTemplate,
      context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
    });
  }

  // Our Impact
  if (result.data.datoCmsOurImpact) {
    const { id, slug } = result.data.datoCmsOurImpact;
    createPage({
      path: slug,
      component: ourImpactTemplate,
      context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
    });
  }

  // Stories Impact
  result.data.allDatoCmsStoriesImpact.edges.forEach(({ node }) => {
    const { id, slug } = node;

    createPage({
      path: `/stories/${slug}`,
      component: storiesTemplate,
      context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
    });
  });

  // Grantees List
  if (result.data.datoCmsGranteesList) {
    const { id, slug } = result.data.datoCmsGranteesList;

    createPage({
      path: slug,
      component: granteeListTemplate,
      context: { id: id, slug: slug, menuPos: getMenuPosition(navTree, id), config },
    });
  }

  // Redirects
  const redirects = result.data.redirects.edges;
  if (redirects) {
    redirects.forEach((redirect) => {
      const { from, to } = redirect.node;
      createRedirect({ fromPath: from, toPath: to, isPermanent: true });
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};
