// src/components/ProjectDetail1.js
import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ImageCarousel from '../components/ImageCarousel';
import GitHubLink from '../components/GitHubLink';
import ProjectTimeline from '../components/ProjectTimeline';
import '../styles/ProjectDetail1.css';
import projectEvents1 from '../assets/data/projectEvents1'; // Importa los eventos

const ProjectDetail1 = () => {
  const images = [
    { src: "/assets/images/game/maqueta1.jpg", alt: "Imagen 1" },
    { src: "/assets/images/game/maqueta2.jpg", alt: "Imagen 2" },
    { src: "/assets/images/game/maqueta3.jpg", alt: "Imagen 3" },
    { src: "/assets/images/game/maqueta4.jpg", alt: "Imagen 4" },
    { src: "/assets/images/game/maqueta5.jpg", alt: "Imagen 5" }
  ];

  const images2 = [
    { src: "/assets/images/game/blender1.jpg", alt: "Imagen 1" },
    { src: "/assets/images/game/blender2.jpg", alt: "Imagen 2" },
    { src: "/assets/images/game/blender3.jpg", alt: "Imagen 3" },
    { src: "/assets/images/game/blender4.jpg", alt: "Imagen 4" },
    { src: "/assets/images/game/blender5.jpg", alt: "Imagen 5" },
  ];

  return (
    <div className="project-detail">
      <img 
        src="/assets/images/game/logo_game.png" 
        alt="Proyecto 1: Simulación de IA" 
        className="project-image" 
        style={{ marginBottom: "1cm" }} 
      />
  
      <h2 style={{ marginBottom: "1cm" }}>Colección de Monedas en Moto 3D VR</h2>
      <p style={{ marginBottom: "1cm" }}>
        Este proyecto es una emocionante simulación en realidad virtual en la que el jugador controla una moto en un entorno tridimensional.
        El objetivo principal es coleccionar monedas dispersas a lo largo del recorrido. Cada moneda recolectada otorga tiempo extra.
      </p>
  
      <h2 style={{ marginBottom: "1cm" }}>Prototipo de baja Fidelidad</h2>
      <ImageCarousel images={images} style={{ marginBottom: "2cm" }} />
  
      <h2 style={{ marginBottom: "1cm" }}>Cronología de Implementación</h2>
      <ProjectTimeline events={projectEvents1} style={{ marginBottom: "1cm" }} />
  
      <h2 style={{ marginBottom: "1cm" }}>Modelos en Blender</h2>
      <ImageCarousel images={images2} style={{ marginBottom: "1cm" }} />
      <br></br>
  
      <h2 style={{ marginBottom: "1cm" }}>Video del Juego</h2>
      <VideoPlayer src="/assets/videos/gameplay.mp4" title="Demostración del Juego" style={{ marginBottom: "1cm" }} />
  
      <GitHubLink repoUrl="https://github.com/UbertoGC/Kidnapping-Protocol" style={{ marginBottom: "1cm" }} />
    </div>
  );
  
};

export default ProjectDetail1;
