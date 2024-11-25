// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ src, title, autoPlay = false, loop = false, muted = false }) => (
  <div className="video-container">
    <video controls width="80%" autoPlay={autoPlay} loop={loop} muted={muted}>
      <source src={src} type="video/mp4" />
      <source src={src.replace('.mp4', '.mov')} type="video/quicktime" />
      Tu navegador no soporta videos HTML5.
    </video>
    <p>{title}</p>
  </div>
);

export default VideoPlayer;