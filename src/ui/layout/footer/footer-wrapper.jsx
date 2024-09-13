import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { CustomLink, Input } from 'tectonica-ui';

import './styles.scss';

const FooterWrapper = () => {
  const { datoCmsConfiguration: footer } = useStaticQuery(graphql`
    query Footer {
      datoCmsConfiguration {
        logo: logoFooter {
          url
          alt
        }
        links {
          ...GlobalLink
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

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 meta">
            <Link className="logo" to="/">
              <img src={footer.logo.url} alt={footer.logo.alt} />
            </Link>

            <div className="links-wrapper">
              {footer.links.map((link) => (
                <CustomLink key={link.id} to={link}>
                  {link.title}
                </CustomLink>
              ))}
            </div>

            <div className="extra-links">
              <div className="links">
                {footer.legalLinksAndExtras.map((link) => (
                  <CustomLink key={link.id} to={link}>
                    {link.title}
                  </CustomLink>
                ))}
              </div>

              <div className="social-links">adasda</div>
            </div>
          </div>

          <div className="col-lg-3 form-wrapper">
            <div className="form">
              <h4>Stay informed</h4>
              <form>
                <Input placeholder="First Name" />
                <Input placeholder="Email" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWrapper;
