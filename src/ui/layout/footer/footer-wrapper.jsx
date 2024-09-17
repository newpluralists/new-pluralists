import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { CustomLink, Input } from 'tectonica-ui';
import SocialLinkList from '../../components/social-media/social-media';
import axios from 'axios';

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

  const [formState, setFormState] = React.useState({
    success: false,
    error: false,
    loading: false,
  });

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    setFormState({ success: false, error: false, loading: true });

    const firstName = e.target[0].value;
    const email = e.target[1].value;

    try {
      axios.post('/api/subscribe', { firstName, email });
      setFormState({ success: true, error: false, loading: false });
    } catch (error) {
      console.error(error);
      setFormState({ success: false, error: true, loading: false });
    }
  };

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

              <div className="social-links">
                <SocialLinkList socialLinks={footer.socialLinks} />
              </div>
            </div>
          </div>

          <div className="col-lg-3 form-wrapper">
            <div className="form">
              <h4>Stay informed</h4>
              {!formState.success && (
                <form onSubmit={handleOnSubmitForm}>
                  <Input placeholder="First Name" />
                  <Input placeholder="Email" />
                  <button type="submit" disabled={formState.loading}>
                    Submit
                  </button>
                </form>
              )}

              {formState.loading && <p>Loading...</p>}
              {formState.success && <p className="success">Success</p>}
              {formState.error && <p className="error">Error</p>}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWrapper;
