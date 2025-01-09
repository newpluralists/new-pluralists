import React from 'react';
import { ButtonList } from 'tectonica-ui';
import Slider from 'react-slick';
import FadeIn from '../../transitions/fade';

import './styles.scss';

const BlockPartners = ({ block }) => {
  const { headline, introduction, ctas = [], partners = [] } = block;

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    speed: 5000,
    rows: 3,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const shuffleArrayAvoidConsecutive = (array) => {
    const shuffled = array.slice().sort(() => Math.random() - 0.5);
    for (let i = 1; i < shuffled.length; i++) {
      if (shuffled[i].id === shuffled[i - 1].id) {
        const swapIndex = (i + 1) % shuffled.length;
        [shuffled[i], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[i]];
      }
    }
    return shuffled;
  };

  const shuffledLogos = shuffleArrayAvoidConsecutive(partners.map((partner) => partner.logo));

  return (
    <section className="block-partners">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <FadeIn>
              <div className="meta">
                {headline && <h3>{headline}</h3>}
                {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
                {ctas && <ButtonList buttons={ctas} />}
              </div>
            </FadeIn>
          </div>

          <div className="col-lg-7 logos">
            <Slider {...settings}>
              {shuffledLogos.map((logo, index) => (
                <div className="logo-wrapper" key={index}>
                  <img src={logo.url} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockPartners;
