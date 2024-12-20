import React from 'react';
import { ButtonList, CustomImage } from 'tectonica-ui';

import './styles.scss';

const BlockNarrativeFull = ({ block }) => {
  const { title, introduction, mainImage, ctas } = block;

  return (
    <section
      className="block-narrative-full"
      // style={{
      //   backgroundImage: `url(${mainImage.url})`,
      //   backgroundPosition: '50dvw',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'contain',
      // }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="meta">
              {title && <div className="title" dangerouslySetInnerHTML={{ __html: title }} />}
              {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
              {ctas && <ButtonList buttons={ctas} />}
            </div>
          </div>
          <div className="col-lg-6 image-container">
            <CustomImage image={mainImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockNarrativeFull;
