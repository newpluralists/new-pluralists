import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const SeoDatoCMS = ({ seo, favicon = null, homepage = false, children }) => {
  return (
    <HelmetDatoCms seo={seo} favicon={favicon?.faviconMetaTags}>
      <link rel="canonical" href="https://newpluralists.org" />
      {homepage && (
        <meta
          name="keywords"
          content="pluralism, new pluralism, belonging, unity, social cohesion, community building, diversity and inclusion, civic engagement, equality, justice, liberty, American ideals, bridge building, social impact, community leadership, philanthropy, democracy, nonprofit collaboration, cultural diversity, inclusive society, social change, collective action, funding initiatives, pluralistic society, shared future, national unity, civil discourse, social harmony"
        />
      )}

      {children}
    </HelmetDatoCms>
  );
};

export default SeoDatoCMS;
