const path = require('path');

module.exports = createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve('./src/templates/page.jsx');

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
    }
  `);

  result.data.allDatoCmsBasicPage.edges.forEach(({ node }) => {
    const { id, slug } = node;

    createPage({
      path: slug,
      component: pageTemplate,
      context: { id: id, slug: slug },
    });
  });
};
