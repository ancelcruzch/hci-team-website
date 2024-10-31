// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ src, title }) => (
  <div className="video-container">
    <video controls width="100%">
      <source src={src} type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>
    <p>{title}</p>
  </div>
);

export default VideoPlayer;
