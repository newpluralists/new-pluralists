import React from 'react';
import { ButtonList, Carousel } from 'tectonica-ui';
import StoryCard from '../../components/story-card/story-card';

import './styles.scss';

const BlockStories = ({ block }) => {
  const { headline, ctas = [], stories = [], backgroundImage } = block;

  return (
    <section className="block-stories">
      <div className="container">
        {headline && <h3>{headline}</h3>}

        <div className="row">
          <Carousel items={stories} renderItem={(story) => <StoryCard story={story} />} slidesToShow={2} />
        </div>

        {ctas && <ButtonList buttons={ctas} />}
      </div>

      {backgroundImage && (
        <div className="block-stories__background-image">
          <img src={backgroundImage.url} alt={backgroundImage.alt} />
        </div>
      )}
    </section>
  );
};

export default BlockStories;