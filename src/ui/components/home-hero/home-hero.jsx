import React from 'react';
import './styles.scss';

const HomeHero = ({ title, introduction, extraText, asset, backgroundOpacity }) => {
  const opacity = backgroundOpacity ? backgroundOpacity / 100 : 0.5;

  return (
    <div
      className="np-ui-hero"
      style={{
        backgroundImage: asset ? `url(${asset.url})` : 'none',
      }}
    >
      <div className="container">
        <div className="main">
          <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />
        </div>

        <div className="extra-text">
          <div className="introduction" dangerouslySetInnerHTML={{ __html: extraText }} />

          <button>
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
        </div>
      </div>

      {asset && (
        <div
          className="overlay"
          style={{
            background: `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      )}
    </div>
  );
};

export default HomeHero;
