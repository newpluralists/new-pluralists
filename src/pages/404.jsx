import * as React from 'react';
import { graphql, Link } from 'gatsby';
import SeoDatoCMS from '../ui/components/seo-datocms';

const NotFoundPage = ({ data: { favicon } }) => {
  return (
    <div className="not-found">
      <SeoDatoCMS favicon={favicon} />

      <div className="container">
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <br />
          <Link className="button-block primary" to="/">
            Go home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;

export const NotFoundQuery = graphql`
  query NotFoundQuery {
    favicon: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
  }
`;

export const Head = () => <title>Not found</title>;
