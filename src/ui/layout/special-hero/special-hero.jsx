import React from 'react';
import { Breadcrumbs } from 'tectonica-ui';

import './styles.scss';

const SpecialHero = ({ title, introduction, image, breadcrumb, variant = 'default' }) => {
  return (
    <section
      className={`special-hero ${variant ? variant : ''}`}
      style={{
        backgroundImage: `url(${image.url})`,
      }}
    >
      <div className="container">
        <Breadcrumbs breadcrumb={breadcrumb} currentPage={title} />

        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            {title && <h1>{title}</h1>}
            {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialHero;
