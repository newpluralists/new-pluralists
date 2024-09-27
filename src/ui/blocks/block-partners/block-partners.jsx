import React from 'react';
import { ButtonList } from 'tectonica-ui';
import Slider from 'react-slick';

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

  const logosColumns = partners.reduce(
    (acc, partner, index) => {
      acc[index % 3].push(partner.logo);
      return acc;
    },
    [[], [], []]
  );

  const [column1, column2, column3] = logosColumns;

  return (
    <section className="block-partners">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="meta">
              {headline && <h3>{headline}</h3>}
              {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
              {ctas && <ButtonList buttons={ctas} />}
            </div>
          </div>

          <div className="col-lg-7 logos">
            <Slider {...settings}>
              {[...column1, ...column1].map((logo) => (
                <div className="logo-wrapper">
                  <img key={logo.id} src={logo.url} alt={logo.alt} loading="lazy" />
                </div>
              ))}
              {[...column2, ...column2].map((logo) => (
                <div className="logo-wrapper">
                  <img key={logo.id} src={logo.url} alt={logo.alt} loading="lazy" />
                </div>
              ))}
              {[...column3, ...column3].map((logo) => (
                <div className="logo-wrapper">
                  <img key={logo.id} src={logo.url} alt={logo.alt} loading="lazy" />
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
