import React from 'react';
import './styles.scss';

const BlockNarrativeFull = ({ block }) => {
  const { title, introduction, mainImage } = block;

  return (
    <section
      className="block-narrative-full"
      style={{
        backgroundImage: `url(${mainImage.url})`,
        backgroundPosition: '50dvw',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="meta">
              {title && <div className="title" dangerouslySetInnerHTML={{ __html: title }} />}
              {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockNarrativeFull;
