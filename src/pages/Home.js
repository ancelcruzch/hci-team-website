import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Colection Coins",
      description: "Explora un mundo virtual en Unreal Engine",
      image: "/assets/images/game/logo_game.png"
    },
    {
      id: 2,
      title: "Relatos Culturales",
      description: "Simulación de inteligencia artificial",
      image: "/assets/images/museum/logo_museum.png"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Fabrizio Mattos",
      role: "Desarrollador Principal",
      image: "/assets/images/team/fabrizio.png"
    },
    {
      id: 2,
      name: "Alain Cruz",
      role: "Ingeniero de Software",
      image: "/assets/images/team/alain.png"
    },
    {
      id: 3,
      name: "Uberto García",
      role: "Diseñador UX/UI",
      image: "/assets/images/team/uberto.png"
    }
  ];

  return (
    <div className="home">
      {/* Video de fondo */}
      <video autoPlay muted loop id="myVideo">
      <source src="/assets/videos/fondo1.mp4" type="video/mp4" />
      </video>


      {/* Hero Section */}
      <section id="home" className="hero">
        <h1 className="title">Proyectos del Curso</h1>
        <h2 className="sub-title">Interacción Humano Computador</h2>
      </section>

      {/* Projects Section */}
      <section className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <div className="image-card">
              <img src={project.image} alt={project.title} />
            </div>
            <Link to={`/project/${project.id}`}>
              <button className="details-button">Ver Más</button>
            </Link>
          </div>
        ))}
      </section>

      {/* Developers Section */}
      <section id="team-section" className="team">
        <h2 className="sub-title">Desarrolladores:</h2>
        <div className="team-list">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              <img src={member.image} alt={member.name} className="member-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <br />
      <br />
    </div>
  );
};

export default Home;
