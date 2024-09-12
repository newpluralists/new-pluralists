import React from 'react';
import { ButtonList } from 'tectonica-ui';

import './styles.scss';

const BlockImpact = ({ block }) => {
  const { headline, introduction, ctas = [], leftTitles = [] } = block;

  return (
    <section className="block-impact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 left-title-wrapper">
            {leftTitles.map((item, index) => (
              <div key={item.id} className="title-item">
                {index >= 0 && <div className="separator" />}
                <div dangerouslySetInnerHTML={{ __html: item.title }} />
              </div>
            ))}
          </div>

          <div className="col-lg-8 main-wrapper">
            {headline && <div className="headline" dangerouslySetInnerHTML={{ __html: headline }} />}
            {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
            {ctas && <ButtonList buttons={ctas} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockImpact;
