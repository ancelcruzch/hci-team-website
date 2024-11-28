// src/components/ProjectDetail2.js
import React, { useState } from 'react';
import '../styles/ProjectDetail2.css';
import projectEvents2 from '../assets/data/projectEvents2'; 
import ProjectTimeline from '../components/ProjectTimeline'; 
import GitHubLink from '../components/GitHubLink';
import PdfButton from '../components/PdfButton';
import ImageCarousel from '../components/ImageCarousel';
import detailsCards from "../assets/data/projectDetails2"; 
import VideoPlayer from '../components/VideoPlayer';

const ProjectDetail2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="project-detail">
      <img 
        src="/assets/images/troya/troya_logo.png" 
        alt="Proyecto 2: Simulación de IA" 
        className="project-image" 
      />
      <h2>Troya: El camino de Aquiles</h2>
      <div className="description">
      <p>Este proyecto de realidad virtual se presenta como una solución innovadora para el aprendizaje histórico, dirigida a estudiantes que buscan experimentar la Guerra de Troya de una manera inmersiva y significativa. A través de la tecnología VR, se ofrece una experiencia educativa que trasciende los métodos convencionales, permitiendo a los usuarios sumergirse en un mundo antiguo, revivir los eventos cruciales del conflicto, y comprender las emociones, decisiones y valores de sus protagonistas desde una perspectiva completamente nueva. Este enfoque busca conectar a los usuarios con el pasado, haciéndolo relevante y accesible, mientras fomenta la empatía y el respeto por las civilizaciones que definieron la historia humana.</p>
      </div>
      <div className="project-detail-line"></div>
  
      {/* Sección de tarjetas */}
      <div className="card-section">
        {detailsCards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.info}</p>
            <button onClick={() => openModal(card)}>Ver más</button>
          </div>
        ))}
      </div>
  
      {/* Modal para mostrar detalles adicionales */}
      {isOpen && selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el modal
          >
            <h3>{selectedCard.title}</h3>
            <p>{selectedCard.detail}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
  
      <br></br>
      <PdfButton pdfUrl="/assets/docs/HCI_Proyecto_Troya.pdf" />
  
      <h2>Video de las necesidades</h2>
      <div>
      <VideoPlayer src="/assets/videos/necesidades.mp4" title="" autoPlay loop />
      </div>

      <h2 style={{ marginBottom: "1cm" }}>Story Board</h2>
      <img 
        src="/assets/images/troya/story_board.jpg" 
        alt="Story Board" 
        style={{ marginBottom: "1cm", width: "80%" }} />
      <br />



      {/* Línea de tiempo del proyecto */}
      <h2>Etapas de Implementación</h2>
      <ProjectTimeline events={projectEvents2} /> {/* Pasa los eventos como prop */}

      <GitHubLink repoUrl="https://github.com/UbertoGC/Kidnapping-Protocol" />

    </div>
  );
};

export default ProjectDetail2;
