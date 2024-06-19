import React from 'react';
import videoSrc from '../../assets/asktopdf.mp4'

const VideoPlayer = () => {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        width: '100%',
        height: 'auto',
      }}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;