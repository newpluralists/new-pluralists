import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Footer } from 'tectonica-ui';

const FooterWrapper = () => {
  const { datoCmsConfiguration: footer } = useStaticQuery(graphql`
    query Footer {
      datoCmsConfiguration {
        copyright
        logo: logoFooter {
          url
          alt
        }
        columns {
          id
          label
          content
          links {
            ...GlobalLink
          }
        }
        legalLinksAndExtras {
          ...GlobalLink
        }
        socialLinks {
          id
          url
          socialNetwork
        }
      }
    }
  `);

  console.log({ footer });

  return <Footer data={footer} />;
};

export default FooterWrapper;
