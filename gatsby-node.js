const path = require('path');

const getURL = (rawUrl) => {
  const urlObj = new URL(rawUrl);
  return urlObj.pathname;
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  const pageTemplate = path.resolve('./src/templates/page.jsx');
  const blogListTemplate = path.resolve('./src/templates/blog-list.jsx');
  const blogTemplate = path.resolve('./src/templates/blog.jsx');
  const funderListTemplate = path.resolve('./src/templates/funder-list.jsx');
  const funderTemplate = path.resolve('./src/templates/funder.jsx');
  const investmentListTemplate = path.resolve('./src/templates/investment-list.jsx');
  const investmentTemplate = path.resolve('./src/templates/investment.jsx');
  const resourceListTemplate = path.resolve('./src/templates/resource-list.jsx');
  const resourceTemplate = path.resolve('./src/templates/resource.jsx');
  const builderListTemplate = path.resolve('./src/templates/builder-list.jsx');
  const builderTemplate = path.resolve('./src/templates/builder.jsx');
  const teamListTemplate = path.resolve('./src/templates/team-list.jsx');
  const teamTemplate = path.resolve('./src/templates/team.jsx');
  const eventListTemplate = path.resolve('./src/templates/events-list.jsx');
  const eventTemplate = path.resolve('./src/templates/event.jsx');
  const thePromiseOfPluralismTemplate = path.resolve('./src/templates/the-promise-of-pluralism.jsx');
  const ourImpactTemplate = path.resolve('./src/templates/our-impact.jsx');
  const storiesTemplate = path.resolve('./src/templates/stories.jsx');
  const granteeListTemplate = path.resolve('./src/templates/grantees-list.jsx');

  const result = await graphql(`
    query AllBasicPages {
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
      allDatoCmsTeam {
        edges {
          node {
            id
            slug
          }
        }
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
    }
  `);

  // Basic pages
  result.data.allDatoCmsBasicPage.edges.forEach(({ node }) => {
    const { id, slug } = node;

    createPage({
      path: slug,
      component: pageTemplate,
      context: { id: id, slug: slug },
    });
  });

  // Blog List
  if (result.data.datoCmsBlogPostsList) {
    const { id, slug } = result.data.datoCmsBlogPostsList;

    createPage({
      path: slug,
      component: blogListTemplate,
      context: { id: id, slug: slug },
    });
  }

  // Blog Posts
  result.data.allDatoCmsPost.edges.forEach(({ node }) => {
    const { id, slug, oldUrl } = node;

    createPage({
      path: `/blogs/${slug}`,
      component: blogTemplate,
      context: { id: id, slug: slug },
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
      context: { id: id, slug: slug },
    });
  }

  // Funder Pages
  result.data.allDatoCmsFunder.edges.forEach(({ node }) => {
    const { id, slug, oldUrl } = node;

    createPage({
      path: `/funders/${slug}`,
      component: funderTemplate,
      context: { id: id, slug: slug },
    });

    // Redirects
    if (oldUrl) {
      createRedirect({
        fromPath: getURL(oldUrl),
        toPath: `/funders/${slug}`,
        isPermanent: true,
      });
    }
  });

  // Investment List
  if (result.data.datoCmsInvestmentsList) {
    const { id, slug } = result.data.datoCmsInvestmentsList;

    createPage({
      path: slug,
      component: investmentListTemplate,
      context: { id: id, slug: slug },
    });
  }

  // Investment Pages
  result.data.allDatoCmsInvestment.edges.forEach(({ node }) => {
    const { id, slug } = node;

    createPage({
      path: `/investments/${slug}`,
      component: investmentTemplate,
      context: { id: id, slug: slug },
    });
  });

  // Resource List
  if (result.data.datoCmsResourcesList) {
    const { id, slug } = result.data.datoCmsResourcesList;

    createPage({
      path: slug,
      component: resourceListTemplate,
      context: { id: id, slug: slug },
    });
  }

  // Resource Pages
  result.data.allDatoCmsResource.edges.forEach(({ node }) => {
    const { id, slug } = node;

    createPage({
      path: `/resources/${slug}`,
      component: resourceTemplate,
      context: { id: id, slug: slug },
    });
  });

  // Field Builders List
  if (result.data.datoCmsFieldBuildersList) {
    const { id, slug } = result.data.datoCmsFieldBuildersList;

    createPage({
      path: slug,
      component: builderListTemplate,
      context: { id: id, slug: slug },
    });
  }

  // Field Builders Pages
  result.data.allDatoCmsBuilder.edges.forEach(({ node }) => {
    const { id, slug, oldUrl } = node;

    createPage({
      path: `/builders/${slug}`,
      component: builderTemplate,
      context: { id: id, slug: slug },
    });

    // Redirects
    if (oldUrl) {
      createRedirect({
        fromPath: getURL(oldUrl),
        toPath: `/builders/${slug}`,
        isPermanent: true,
      });
    }
  });

  // Team List
  if (result.data.datoCmsTeamList) {
    const { id, slug } = result.data.datoCmsTeamList;

    createPage({
      path: slug,
      component: teamListTemplate,
      context: { id: id, slug: slug },
    });
  }

  // Team Pages
  result.data.allDatoCmsTeam.edges.forEach(({ node }) => {
    const { id, slug, oldUrl } = node;

    createPage({
      path: `/team/${slug}`,
      component: teamTemplate,
      context: { id: id, slug: slug },
    });

    // Redirects
    if (oldUrl) {
      createRedirect({
        fromPath: getURL(oldUrl),
        toPath: `/team/${slug}`,
        isPermanent: true,
      });
    }
  });

  // Events List
  if (result.data.datoCmsEventList) {
    const { id, slug } = result.data.datoCmsEventList;

    createPage({
      path: slug,
      component: eventListTemplate,
      context: { id: id, slug: slug },
    });
  }

  // Events Pages
  result.data.allDatoCmsEvent.edges.forEach(({ node }) => {
    const { id, slug, oldUrl } = node;

    createPage({
      path: `/events/${slug}`,
      component: eventTemplate,
      context: { id: id, slug: slug },
    });

    // Redirects
    if (oldUrl) {
      createRedirect({
        fromPath: getURL(oldUrl),
        toPath: `/events/${slug}`,
        isPermanent: true,
      });
    }
  });

  // The Promise of Pluralism
  if (result.data.datoCmsThePromiseOfPluralism) {
    const { id, slug } = result.data.datoCmsThePromiseOfPluralism;
    createPage({
      path: slug,
      component: thePromiseOfPluralismTemplate,
      context: { id: id, slug: slug },
    });
  }

  // Our Impact
  if (result.data.datoCmsOurImpact) {
    const { id, slug } = result.data.datoCmsOurImpact;
    createPage({
      path: slug,
      component: ourImpactTemplate,
      context: { id: id, slug: slug },
    });
  }

  // Stories Impact
  result.data.allDatoCmsStoriesImpact.edges.forEach(({ node }) => {
    const { id, slug } = node;

    createPage({
      path: `/stories/${slug}`,
      component: storiesTemplate,
      context: { id: id, slug: slug },
    });
  });

  // Grantees List
  if (result.data.datoCmsGranteesList) {
    const { id, slug } = result.data.datoCmsGranteesList;

    createPage({
      path: slug,
      component: granteeListTemplate,
      context: { id: id, slug: slug },
    });
  }
};
