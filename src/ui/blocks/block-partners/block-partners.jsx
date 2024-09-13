import React from 'react';
import { ButtonList } from 'tectonica-ui';
import Slider from 'react-slick';

import './styles.scss';

const BlockPartners = ({ block }) => {
  const { headline, introduction, ctas = [], logos = [] } = block;

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    centerMode: true,
  };

  const logosColumns = logos.reduce(
    (acc, img, index) => {
      acc[index % 3].push(img);
      return acc;
    },
    [[], [], []]
  );

  const [column1, column2, column3] = logosColumns;

  return (
    <section className="block-partners">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {headline && <h3>{headline}</h3>}
            {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
            {ctas && <ButtonList buttons={ctas} />}
          </div>

          <div className="col-lg-8 logos">
            <Slider {...settings}>
              <div className="logo-wrapper">
                {[...column1, ...column1].map((logo) => (
                  <img key={logo.id} src={logo.url} alt={logo.alt} />
                ))}
              </div>
              <div className="logo-wrapper">
                {[...column2, ...column2].map((logo) => (
                  <img key={logo.id} src={logo.url} alt={logo.alt} />
                ))}
              </div>
              <div className="logo-wrapper">
                {[...column3, ...column3].map((logo) => (
                  <img key={logo.id} src={logo.url} alt={logo.alt} />
                ))}
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockPartners;
