const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve('./src/templates/page.jsx');
  const blogListTemplate = path.resolve('./src/templates/blog-list.jsx');
  const blogTemplate = path.resolve('./src/templates/blog.jsx');
  const funderListTemplate = path.resolve('./src/templates/funder-list.jsx');
  const funderTemplate = path.resolve('./src/templates/funder.jsx');
  const investmentListTemplate = path.resolve('./src/templates/investment-list.jsx');
  const investmentTemplate = path.resolve('./src/templates/investment.jsx');
  const resourceListTemplate = path.resolve('./src/templates/resource-list.jsx');
  const resourceTemplate = path.resolve('./src/templates/resource.jsx');

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
    const { id, slug } = node;

    createPage({
      path: `/blog/${slug}`,
      component: blogTemplate,
      context: { id: id, slug: slug },
    });
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
    const { id, slug } = node;

    createPage({
      path: `/funders/${slug}`,
      component: funderTemplate,
      context: { id: id, slug: slug },
    });
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
};
