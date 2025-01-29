import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import './styles.scss';

const CookiesBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
    const cookieEntry = cookies.find((cookie) => cookie.startsWith('acceptCookiesNP='));
    const cookieValue = cookieEntry ? cookieEntry.split('=')[1] : null;

    if (!cookieValue || cookieValue === 'true') {
      setShowBanner(true);

      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
        });
      }
    } else if (cookieValue === 'accepted') {
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          ad_storage: 'granted',
          analytics_storage: 'granted',
        });
      }
    }
  }, []);

  const handleAccept = () => {
    const ONE_YEAR_DURATION = 60 * 60 * 24 * 365;
    document.cookie = 'acceptCookiesNP=accepted; path=/; max-age=' + ONE_YEAR_DURATION;
    setShowBanner(false);

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  };

  const handleReject = () => {
    const ONE_YEAR_DURATION = 60 * 60 * 24 * 365;
    document.cookie = 'acceptCookiesNP=decline; path=/; max-age=' + ONE_YEAR_DURATION;
    setShowBanner(false);

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
      });
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookies-banner">
      <div className="container">
        <p>
          This website stores cookies on your computer. These cookies are used to collect information about how you
          interact with our website and allow us to remember you. We use this information in order to improve and
          customize your browsing experience and for analytics and metrics about our visitors both on this website and
          other media. To find out more about the cookies we use, see our{' '}
          <Link to="/privacy-policy">Privacy Policy.</Link>
        </p>

        <div className="buttons">
          <button className="button-block primary" onClick={handleAccept}>
            Accept
          </button>
          <button className="button-block reject" onClick={handleReject}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesBanner;
