import React, { useLayoutEffect, useState } from 'react';
import SeoDatoCMS from '../seo-datocms';
import bcrypt from 'bcryptjs';
import { navigate } from 'gatsby';
import ListWrapper from '../../layout/list-wrapper/list-wrapper';

import './styles.scss';

const ProtectedView = ({ config, favicon }) => {
  const [password, setPassword] = useState();
  const [msgError, setMsgError] = useState();

  useLayoutEffect(() => {
    const navbar = document.querySelector('.ui-navbar');
    navbar.style.display = 'none';

    const footer = document.querySelector('.footer-wrapper');
    footer.style.display = 'none';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const result = bcrypt.compareSync(password, config.password);

      if (!result) {
        setMsgError('The password entered is incorrect.');
      } else {
        document.cookie = 'access_granted=true; path=/; max-age=86400';

        const navbar = document.querySelector('.ui-navbar');
        navbar.style.display = 'flex';

        const footer = document.querySelector('.footer-wrapper');
        footer.style.display = 'block';

        navigate('/');
      }
    } catch (error) {
      console.log({ error });
      setMsgError('An unexpected error has occurred. Please try again later or contact support.');
    }
  };

  return (
    <ListWrapper>
      <div className="ui-protected-view">
        <SeoDatoCMS favicon={favicon}>
          <title>Protected Site</title>
        </SeoDatoCMS>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>This site is protected</h1>
              <p className="info">This page requires a password to be access.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className={`form-control ${msgError ? 'with-error' : ''}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="button-block primary">
                  Access
                </button>
              </form>

              {msgError && <p className="error">{msgError}</p>}
            </div>
          </div>
        </div>
      </div>
    </ListWrapper>
  );
};

export default ProtectedView;
