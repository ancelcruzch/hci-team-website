// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <p>Progreso: {project.progress}%</p>
    </div>
  );
};

export default ProjectCard;
