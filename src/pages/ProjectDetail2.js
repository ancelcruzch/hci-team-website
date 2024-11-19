// src/components/ProjectDetail2.js
import React, { useState } from 'react';
import '../styles/ProjectDetail2.css';
import projectEvents2 from '../assets/data/projectEvents2'; 
import ProjectTimeline from '../components/ProjectTimeline'; 
import GitHubLink from '../components/GitHubLink';
import PdfButton from '../components/PdfButton';
// import cards from "../../public/assets/data/troya/projectCards"; 

const ProjectDetail2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { 
      title: "Introducción", 
      info: "Explora cómo la realidad virtual puede fortalecer el vínculo entre tecnología e historia.",
      detail: "La introducción del proyecto describe cómo la tecnología VR permite una exploración detallada y experiencial de culturas ancestrales. Al integrar elementos visuales y auditivos inmersivos, se busca que los usuarios no solo observen, sino que vivan y comprendan la esencia de la vida cotidiana y los valores de estas culturas. La iniciativa tiene como objetivo transformar el aprendizaje sobre el pasado en una experiencia educativa y atractiva, en lugar de una actividad meramente informativa."
    },
    { 
      title: "Planteamiento del Problema", 
      info: "Desconexión cultural de los jóvenes con sus raíces históricas y culturales.",
      detail: "El planteamiento del problema aborda la desconexión actual entre los jóvenes y sus raíces culturales, una tendencia global causada por la falta de métodos modernos y atractivos para el aprendizaje de la historia. Este proyecto busca revertir esta tendencia usando un entorno VR que no solo revitaliza el interés por el pasado, sino que también facilita un acceso directo y personal a las costumbres ancestrales, promoviendo un aprendizaje más significativo y relevante."
    },
    { 
      title: "Objetivos", 
      info: "Sumergir a los usuarios en un entorno VR que fortalezca el vínculo cultural.",
      detail: "Los objetivos del proyecto se enfocan en el diseño de un entorno VR tridimensional que permite a los usuarios experimentar de forma inmersiva la vida cotidiana, las prácticas y los valores de antiguas civilizaciones. Este enfoque pretende que los usuarios desarrollen una apreciación genuina y profunda de las culturas pasadas, reconociendo sus contribuciones y valorando su herencia cultural como parte esencial de su identidad."
    },
    { 
      title: "Público Objetivo", 
      info: "Dirigido a estudiantes universitarios y entusiastas de la historia y cultura.",
      detail: "El público objetivo abarca principalmente estudiantes universitarios y personas con un interés genuino en la historia, la antropología y el redescubrimiento cultural. La audiencia incluye usuarios que buscan experiencias educativas innovadoras y métodos interactivos de aprendizaje que combinen entretenimiento y formación cultural."
    },
    { 
      title: "Funcionalidad del Proyecto", 
      info: "Niveles inmersivos con efectos visuales y auditivos de culturas antiguas.",
      detail: "El proyecto se estructura en distintos niveles que representan momentos y aspectos esenciales de la vida cotidiana de diversas culturas ancestrales. Cada nivel está enriquecido con efectos visuales y auditivos que recrean las sensaciones y ambientes característicos de la época, permitiendo una experiencia multisensorial para que el usuario pueda vivir, observar y aprender sobre cada cultura de manera auténtica y vivencial."
    },
    { 
      "title": "Análisis de Sistemas Existentes", 
      "info": "Análisis de plataformas VR actuales y su enfoque en la educación cultural.",
      "detail": "Examina sistemas de realidad virtual ya existentes que han sido utilizados en la educación histórica y cultural. Se identifican las fortalezas y limitaciones de cada plataforma en cuanto a la fidelidad histórica, la capacidad de inmersión y la efectividad educativa, estableciendo un marco de referencia para mejorar la propuesta y proporcionar una experiencia diferenciada y avanzada en términos de aprendizaje cultural. Ejemplos de plataformas incluyen Google Expeditions, que ofrece recorridos virtuales de sitios históricos mediante imágenes 360° con acceso limitado a la interacción directa; National Geographic VR, que permite explorar lugares arqueológicos como Machu Picchu con contenido educativo integrado pero limitada interactividad; y Virtual Reality Rome Reborn, que se enfoca en recreaciones arquitectónicas de la Roma Antigua, ofreciendo un nivel detallado de inmersión en el diseño urbano, pero carece de representación de la vida cotidiana y actividades culturales."
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
