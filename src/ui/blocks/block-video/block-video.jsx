import React, { useState } from 'react';
import './styles.scss';

const VideoBlock = ({ block }) => {
  const { id, video, thumbnailImage, externalVideo, captionCredit } = block;

  const streamingUrl = video?.video?.streamingUrl;
  const internalThumbnail = video?.video?.thumbnailUrl;
  const thumbnail = internalThumbnail || thumbnailImage?.url;
  const thumbnailAlt = thumbnailImage?.alt || 'Video thumbnail';

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);

  const getEmbedUrl = (url) => {
    if (!url) return null;

    const isVimeo = url.includes('vimeo.com');
    const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');

    if (isVimeo) {
      const match = url.match(/vimeo\.com\/(\d+)/);
      return match ? `https://player.vimeo.com/video/${match[1]}` : null;
    }

    if (isYouTube) {
      const videoId = url.split('v=')[1] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  };

  const renderPlayer = () => {
    if (streamingUrl) {
      return (
        <video
          controls
          autoPlay
          poster={thumbnail || undefined}
          style={{ width: '100%', borderRadius: '8px', marginBottom: '.5rem' }}
        >
          <source src={streamingUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (externalVideo?.url) {
      return (
        <div style={{ position: 'relative', paddingTop: '56.25%', marginBottom: '.5rem' }}>
          <iframe
            src={getEmbedUrl(externalVideo.url)}
            title={`Video ${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '8px',
            }}
          />
        </div>
      );
    }
    return null;
  };

  const renderThumbnail = () => (
    <div
      onClick={handlePlay}
      style={{
        position: 'relative',
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      <img
        src={thumbnail}
        alt={thumbnailAlt}
        style={{ width: '100%', borderRadius: '8px', display: 'block', marginBottom: 0 }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );

  return (
    <div id={`video-${id}`} style={{ marginBottom: '1.5rem' }}>
      {isPlaying ? renderPlayer() : thumbnail ? renderThumbnail() : <p>No video available.</p>}
      {captionCredit && <p className="video-caption-credit">{captionCredit}</p>}
    </div>
  );
};

export default VideoBlock;
