import React from 'react';
import HomeHeroVideo from '../../../../static/np-hero-home.mp4';
import { motion, useTransform, useScroll } from 'motion/react';

import './styles.scss';

const BG_VIDEO_PLACEHOLDER = 'https://www.datocms-assets.com/141895/1726056339-no-color-video-hero_1-2.png';

const HomeHero = ({ title, introduction, extraText, backgroundOpacity }) => {
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  const opacity = backgroundOpacity ? backgroundOpacity / 100 : 0.5;

  const { scrollY } = useScroll();
  const clipPath = useTransform(scrollY, [0, 600], ['inset(0% round 0px)', 'inset(5% round 20px)']);
  const extraTextOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const handleOnToggleVideo = () => {
    document.documentElement.style.overflowY = showVideoModal ? 'auto' : 'hidden';
    setShowVideoModal((prev) => !prev);
  };

  return (
    <div className="hero-wrapper" style={{ backgroundColor: 'var(--np-neutral-4)' }}>
      <motion.div
        className={`np-ui-hero ${showVideoModal ? 'with-video' : ''}`}
        style={{
          clipPath,
          margin: '0 auto',
          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
          willChange: 'clip-path',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={showVideoModal}
          poster={BG_VIDEO_PLACEHOLDER}
          className="background-video"
        >
          <source src={HomeHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container">
          <div className="main">
            {title && <div className="title" dangerouslySetInnerHTML={{ __html: title }} />}
            {introduction && <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />}
          </div>

          <motion.div className="extra-text" style={{ opacity: extraTextOpacity }}>
            {extraText && <div className="introduction" dangerouslySetInnerHTML={{ __html: extraText }} />}

            <button onClick={handleOnToggleVideo}>
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                <path
                  d="M24.5 49.0005C10.9529 49.0005 0 38.0475 0 24.5005C0 10.9534 10.9529 0.000488281 24.5 0.000488281C38.0471 0.000488281 49 10.9534 49 24.5005C49 38.0475 38.0471 49.0005 24.5 49.0005ZM24.5 2.88284C12.5382 2.88284 2.88235 12.5387 2.88235 24.5005C2.88235 36.4623 12.5382 46.1181 24.5 46.1181C36.4618 46.1181 46.1176 36.4623 46.1176 24.5005C46.1176 12.5387 36.4618 2.88284 24.5 2.88284Z"
                  fill="white"
                />
                <path
                  d="M17.2941 37.0387V11.9622L38.9118 24.5005L17.2941 37.0387ZM20.1765 16.8622V31.9946L33.1471 24.3564L20.1765 16.8622Z"
                  fill="white"
                />
              </svg>
            </button>
          </motion.div>
        </div>
        <div className="overlay" style={{ background: `rgba(0, 0, 0, ${opacity})` }} />

        <button className="close-video" onClick={handleOnToggleVideo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#262626"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default HomeHero;
