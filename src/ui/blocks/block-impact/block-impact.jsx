import React from 'react';
import { ButtonList } from 'tectonica-ui';
import FadeIn from '../../transitions/fade';

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
                <FadeIn>
                  <div dangerouslySetInnerHTML={{ __html: item.title }} />
                </FadeIn>
              </div>
            ))}
          </div>

          <div className="col-lg-8 main-wrapper">
            {headline && (
              <FadeIn>
                <div className="headline" dangerouslySetInnerHTML={{ __html: headline }} />
              </FadeIn>
            )}
            {introduction && (
              <FadeIn>
                <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />
              </FadeIn>
            )}
            {ctas && (
              <FadeIn>
                <ButtonList buttons={ctas} />
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockImpact;
