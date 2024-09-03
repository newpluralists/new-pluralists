import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header } from 'tectonica-ui';

const HeaderWrapper = () => {
  const menus = useStaticQuery(graphql`
    query {
      configuration: datoCmsConfiguration {
        logo {
          width
          height
          alt
          url
        }
      }
      mainMenu: allDatoCmsMenuItem(filter: { root: { eq: true } }, sort: { position: ASC }) {
        nodes {
          ...MainNavigation
        }
      }
    }
  `);

  return <Header menu={menus.mainMenu} logo={menus.configuration.logo} location={{}} />;
};

export default HeaderWrapper;
