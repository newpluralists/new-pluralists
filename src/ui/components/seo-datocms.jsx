import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { getPathFromModel } from '../../config';

const SeoDatoCMS = ({ seo, favicon = null, homepage = false, canonicalMetadata, children }) => {
  const siteUrl = process.env.SITE_URL || 'https://newpluralists.org';
  const currentUrl = canonicalMetadata
    ? `${siteUrl}${getPathFromModel({
        slug: canonicalMetadata.slug,
        model: canonicalMetadata.model,
      })}`
    : '';

  return (
    <HelmetDatoCms seo={seo} favicon={favicon?.faviconMetaTags}>
      {canonicalMetadata && <link rel="canonical" href={currentUrl} />}
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
