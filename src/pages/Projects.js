// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../../public/assets/images/game/components/ProjectCard';
import projectData from '../assets/data/projects.json'; // Puedes almacenar la información en un archivo JSON

const Projects = () => {
  return (
    <section>
      <h2>Proyectos Desarrollados</h2>
      <div className="project-list">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
