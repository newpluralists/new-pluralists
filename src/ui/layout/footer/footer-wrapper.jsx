import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { CustomLink } from 'tectonica-ui';
import SocialLinkList from '../../components/social-media/social-media';

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
        formIntroduction
        formLegalText
        formSignUpUrl
      }
    }
  `);

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 meta">
            <Link className="logo" to="/">
              <img src={footer.logo.url} alt={footer.logo.alt || 'New Pluralists Logo'} loading="lazy" />
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
                <a href="https://www.tectonica.co/" target="_blank" rel="noreferrer">
                  Built by Tectonica
                </a>
              </div>

              <div className="social-links">
                <SocialLinkList socialLinks={footer.socialLinks} />
              </div>
            </div>
          </div>

          <div className="col-lg-4 form-wrapper">
            <div className="form">
              <h4>Stay informed</h4>
              <div className="description" dangerouslySetInnerHTML={{ __html: footer.formIntroduction }} />

              {footer.formSignUpUrl && (
                <a href={footer.formSignUpUrl} target="_blank" rel="noreferrer" className="button-block white">
                  Sign up
                </a>
              )}

              {/* <MailchimpForm /> */}
              {/* <div className="legal-text" dangerouslySetInnerHTML={{ __html: footer.formLegalText }} /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// const MailchimpForm = () => (
//   <div id="mc_embed_shell">
//     <div id="mc_embed_signup">
//       <form
//         action="https://newpluralists.us1.list-manage.com/subscribe/post?u=e47af12b3e9793c2089db0c53&amp;id=84b7d8e357&amp;f_id=00f2f1e5f0"
//         method="post"
//         id="mc-embedded-subscribe-form"
//         name="mc-embedded-subscribe-form"
//         className="validate"
//         target="_self"
//         novalidate=""
//       >
//         <div id="mc_embed_signup_scroll" className="wrapper">
//           <div className="mc-field-group">
//             <input type="text" name="FNAME" className="text" id="mce-FNAME" placeholder="First Name" required />
//           </div>
//           <div className="mc-field-group">
//             <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email" required />
//           </div>
//           <div hidden>
//             <input type="hidden" name="tags" value="5811177" />
//           </div>
//           <div id="mce-responses" className="clear" style={{ display: 'none' }}>
//             <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
//             <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
//           </div>
//           <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px', display: 'none' }}>
//             <input type="text" name="b_e47af12b3e9793c2089db0c53_84b7d8e357" tabIndex="-1" value="" />
//           </div>
//           <div className="clear">
//             <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// );

export default FooterWrapper;
