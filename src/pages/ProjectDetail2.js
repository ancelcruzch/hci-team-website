// src/components/ProjectDetail2.js
import React, { useState } from 'react';
import '../styles/ProjectDetail2.css';
import projectEvents2 from '../assets/data/projectEvents2'; 
import ProjectTimeline from '../components/ProjectTimeline'; 
import GitHubLink from '../components/GitHubLink';
import PdfButton from '../components/PdfButton';
import detailsCards from "../assets/data/projectDetails2"; 

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
      <h2>Relatos Culturales: Caral 3D VR</h2>
      <div className="description">
        <p> este proyecto de realidad virtual se presenta como una solución innovadora para el aprendizaje cultural, dirigida a un público que busca una reconexión con sus raíces de una forma moderna y significativa. A través de la tecnología VR, se ofrece una experiencia educativa que supera los métodos convencionales, permitiendo a los usuarios sumergirse en un mundo antiguo, explorar sus costumbres, y entender sus valores desde una perspectiva completamente nueva. Este enfoque busca cerrar la brecha entre el pasado y el presente, haciendo que la historia y las raíces culturales vuelvan a ser parte activa de la identidad de los usuarios, fortaleciendo su sentido de pertenencia y su respeto por las civilizaciones que los precedieron.</p>
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
      <h2>Documento Detallado</h2>
      <PdfButton pdfUrl="/assets/docs/HCI_Proyecto_Troya.pdf" />

      <br/>
  
      {/* Línea de tiempo del proyecto */}
      <h2>Linea de Tiempo</h2>
      <ProjectTimeline events={projectEvents2} /> {/* Pasa los eventos como prop */}

      <GitHubLink repoUrl="https://github.com/UbertoGC/Kidnapping-Protocol" />

    </div>
  );
};

export default ProjectDetail2;
