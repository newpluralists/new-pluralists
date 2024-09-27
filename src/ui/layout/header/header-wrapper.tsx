import React from 'react';
import { graphql } from 'gatsby';
import { Header, Notification } from 'tectonica-ui';

const HeaderWrapper = ({ data }) => {
  const menus = data;

  return (
    <>
      <Notification variant="blue" block={{ content: menus.configuration.content.value }} />
      <Header menu={menus.mainMenu} logo={menus.configuration.logo} location={{}} />
    </>
  );
};

export default HeaderWrapper;

export const query = graphql`
  query {
    configuration: datoCmsConfiguration {
      logo {
        width
        height
        alt
        url
      }
      showTopAlert
      content: message {
        value
        blocks
        links {
          id
          slug
          model {
            apiKey
          }
        }
      }
    }
    mainMenu: allDatoCmsMenuItem(filter: { root: { eq: true } }, sort: { position: ASC }) {
      nodes {
        ...MainNavigation
      }
    }
  }
`;
