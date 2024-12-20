import React from 'react';
import { ButtonList } from 'tectonica-ui';
import FadeIn from '../../transitions/fade';

import './styles.scss';

const BlockNarrativeFull = ({ block }) => {
  const { title, introduction, mainImage, ctas } = block;

  return (
    <FadeIn>
      <section
        className="block-narrative-full"
        style={{
          backgroundImage: `url(${mainImage.url})`,
          backgroundPosition: '50dvw',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '120%',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <FadeIn>
                <div className="meta">
                  {title && <div className="title" dangerouslySetInnerHTML={{ __html: title }} />}
                  {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
                  {ctas && <ButtonList buttons={ctas} />}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default BlockNarrativeFull;
