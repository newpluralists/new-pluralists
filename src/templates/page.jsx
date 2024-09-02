import * as React from 'react';
import { graphql } from 'gatsby';

const BasicPage = ({ data: { page, favicon } }) => {
  return <div>Basic page example: {page?.title}</div>;
};

export default BasicPage;

// export const BasicPageQuery = graphql`
//   query BasicPageById($id: String) {
//     favicon: datoCmsSite {
//       faviconMetaTags {
//         ...GatsbyDatoCmsFaviconMetaTags
//       }
//     }
//     page: datoCmsBasicPage(id: { eq: $id }) {
//       ...BasicPage
//     }
//   }
// `;
