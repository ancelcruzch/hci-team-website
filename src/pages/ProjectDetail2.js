// src/components/ProjectDetail2.js
import React, { useState } from 'react';
import '../styles/ProjectDetail.css';
import projectEvents2 from '../assets/data/projectEvents2'; // Importa projectEvents2
import ProjectTimeline from '../components/ProjectTimeline'; // Importa el componente ProjectTimeline

const ProjectDetail2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { 
      title: "Introducción", 
      info: "Descripción breve de la tarjeta 1.", 
      detail: "Este proyecto explora cómo la tecnología puede facilitar una conexión más profunda entre el usuario y la historia ancestral..."
    },
    { 
      title: "Planteamiento del Problema", 
      info: "Descripción breve de la tarjeta 2.", 
      detail: "En la actualidad, los jóvenes sienten desconexión hacia sus raíces culturales y sus antepasados..."
    },
    { 
      title: "Objetivos", 
      info: "Descripción breve de la tarjeta 3.", 
      detail: "Diseñar un entorno de realidad virtual donde el usuario pueda sumergirse en las vidas y valores de sus antepasados..."
    },
    { 
      title: "Público Objetivo", 
      info: "Descripción breve de la tarjeta 4.", 
      detail: "Jóvenes estudiantes de secundaria, personas interesadas en historia y cualquier usuario que quiera reconectar con su herencia cultural."
    },
    { 
      title: "Funcionalidad del Proyecto", 
      info: "Descripción breve de la tarjeta 5.", 
      detail: "Cada nivel transportará al usuario a momentos cruciales de cada cultura, acompañados de sonidos y efectos visuales..."
    },
    { 
      title: "Funcionalidad del Proyecto", 
      info: "Descripción breve de la tarjeta 5.", 
      detail: "Cada nivel transportará al usuario a momentos cruciales de cada cultura, acompañados de sonidos y efectos visuales..."
    }
  ];

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
        src="/assets/images/museum/logo_museum.png" 
        alt="Proyecto 2: Simulación de IA" 
        className="project-image" 
      />
      <h2>Relatos Culturales: Caral 3D VR</h2>
      <div className="description">
        <p>Proyecto enfocado en la simulación de inteligencia artificial en un entorno simulado.</p>
      </div>
      <div className="project-detail-line"></div>
  
      {/* Sección de tarjetas */}
      <div className="card-section">
        {cards.map((card, index) => (
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
  
      <br/>
  
      {/* Línea de tiempo del proyecto */}
      <h2>Linea de Tiempo</h2>
      <ProjectTimeline events={projectEvents2} /> {/* Pasa los eventos como prop */}
    </div>
  );
};

export default ProjectDetail2;
