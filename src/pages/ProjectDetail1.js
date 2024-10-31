// src/components/ProjectDetail1.js
import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ImageCarousel from '../components/ImageCarousel';
import GitHubLink from '../components/GitHubLink';
import ProjectTimeline from '../components/ProjectTimeline';
import '../styles/ProjectDetail.css';
import projectEvents1 from '../assets/data/projectEvents1'; // Importa los eventos

const ProjectDetail1 = () => {
  const images = [
    { src: "/assets/images/game/maqueta1.jpg", alt: "Imagen 1" },
    { src: "/assets/images/game/maqueta2.jpg", alt: "Imagen 2" },
    { src: "/assets/images/game/maqueta3.jpg", alt: "Imagen 3" },
    { src: "/assets/images/game/maqueta4.jpg", alt: "Imagen 4" }
  ];

  return (
    <div className="project-detail">
      <img src="/assets/images/game/logo_game.png" alt="Proyecto 1: Simulación de IA" className="project-image" />

      <h2>Colección de Monedas en Moto 3D VR</h2>
      <p>
        Este proyecto es una emocionante simulación en realidad virtual en la que el jugador controla una moto en un entorno tridimensional.
        El objetivo principal es coleccionar monedas dispersas a lo largo del recorrido. Cada moneda recolectada otorga tiempo extra.
      </p>

      <h2>Maqueta y Evaluación</h2>
      <ImageCarousel images={images} />

      <h2>Cronología de Implementación</h2>
      <ProjectTimeline events={projectEvents1} />

      <h2>Video del Juego</h2>
      <VideoPlayer src="/assets/videos/gameplay.mp4" title="Demostración del Juego" />

      <GitHubLink repoUrl="https://github.com/UbertoGC/Kidnapping-Protocol" />
    </div>
  );
};

export default ProjectDetail1;
