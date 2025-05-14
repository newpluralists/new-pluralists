import React from 'react';
import './styles.scss';

const BlockImageGrid = ({ block }) => {
  const { images, caption } = block;

  if (!images || images.length === 0) {
    return null;
  }
  const [firstImage, ...restImages] = images;

  return (
    <div className="ui-block-image-grid">
      <div className={'mainImage'}>
        <img
          src={firstImage.url}
          alt={firstImage.alt}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>
      {restImages.length > 0 && (
        <div className={'imageColumns'}>
          {restImages.map((image, index) => (
            <div key={index} className={'imageItem'}>
              <img
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          ))}
        </div>
      )}
      {caption && <p className={'caption'}>{caption}</p>}
    </div>
  );
};

export default BlockImageGrid;
