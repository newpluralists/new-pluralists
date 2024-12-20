import React, { useEffect, useState } from 'react';
import { ButtonList } from 'tectonica-ui';
import FadeIn from '../../transitions/fade';

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
    }, 5500);

    return () => clearInterval(interval);
  }, [headlines.length]);

  const handleCircleClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setActiveHeadline(index);
      setFade(true);
    }, 500);
  };

  return (
    <section className="block-principles">
      <div className="container">
        <div className="top-section">
          <div className="meta">
            <div className="headlines">
              {headlines.length > 0 && (
                <>
                  <div className="circles">
                    {headlines.map((_, index) => (
                      <span
                        key={index}
                        className={`circle ${index === activeHeadline ? 'active' : ''}`}
                        onClick={() => handleCircleClick(index)}
                      ></span>
                    ))}
                  </div>
                  <Headline headline={headlines[activeHeadline].title} fade={fade} />
                </>
              )}
            </div>

            <FadeIn>
              {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
              {ctas && <ButtonList buttons={ctas} />}
            </FadeIn>
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

          <FadeIn>
            <div className="meta">
              {boxHeadline && <div className="headline" dangerouslySetInnerHTML={{ __html: boxHeadline }} />}
              {boxIntroduction && (
                <div className="introduction" dangerouslySetInnerHTML={{ __html: boxIntroduction }} />
              )}
              {boxCtas && <ButtonList buttons={boxCtas} />}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default BlockPrinciples;

const Headline = ({ headline, fade }) => {
  return <div className={`headline ${fade ? 'fade-in' : 'fade-out'}`} dangerouslySetInnerHTML={{ __html: headline }} />;
};
