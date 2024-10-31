// src/components/GitHubLink.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GitHubLink = ({ repoUrl }) => (
  <div className="github-link">
    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
      <FaGithub size={32} />
      Ver en GitHub
    </a>
  </div>
);

export default GitHubLink;
