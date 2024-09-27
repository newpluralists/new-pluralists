import React, { useEffect, useState } from 'react';
import { ButtonList } from 'tectonica-ui';

import './styles.scss';

const BlockPrinciples = ({ block }) => {
  const {
    headlines = [],
    introduction,
    image,
    ctas = [],
    boxHeadline,
    boxIntroduction,
    boxCtas = [],
    boxImage,
  } = block;

  const [activeHeadline, setActiveHeadline] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveHeadline((prev) => (prev + 1) % headlines.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <section className="block-principles">
      <div className="container">
        <div className="top-section">
          <div className="meta">
            <div className="headlines">
              {headlines.length > 0 && <Headline headline={headlines[activeHeadline].title} fade={fade} />}
            </div>

            {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
            {ctas && <ButtonList buttons={ctas} />}
          </div>

          {image?.url && (
            <div className="image">
              <img src={image.url} alt={image.alt} loading="lazy" />
            </div>
          )}
        </div>

        <div className="box-section">
          {boxImage?.url && (
            <div className="image">
              <img src={boxImage.url} alt={boxImage.alt} loading="lazy" />
            </div>
          )}

          <div className="meta">
            {boxHeadline && <div className="headline" dangerouslySetInnerHTML={{ __html: boxHeadline }} />}
            {boxIntroduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: boxIntroduction }} />}
            {boxCtas && <ButtonList buttons={boxCtas} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockPrinciples;

const Headline = ({ headline, fade }) => {
  return <div className={`headline ${fade ? 'fade-in' : 'fade-out'}`} dangerouslySetInnerHTML={{ __html: headline }} />;
};
