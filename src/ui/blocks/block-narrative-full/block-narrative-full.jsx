import React from 'react';
import './styles.scss';

const BlockNarrativeFull = ({ block }) => {
  const { title, introduction, mainImage, decoratorImage } = block;

  console.log({ decoratorImage });

  return (
    <section className="block-narrative-full">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="meta">
              {title && <div className="title" dangerouslySetInnerHTML={{ __html: title }} />}
              {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="image-wrapper">
              <div className="image">
                <img src={mainImage.url} alt={mainImage.alt} />
              </div>

              {decoratorImage && <img className="decorator" src={decoratorImage.url} alt={decoratorImage.alt} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockNarrativeFull;