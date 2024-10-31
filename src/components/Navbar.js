import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa'; // Importa el icono de casa
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta si el usuario ha hecho scroll para cambiar el estilo de la barra de navegación
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Usa useEffect para agregar y limpiar el evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">
        <a href="/" aria-label="Home"> {/* Redirige a la página principal */}
          <FaHome className="navbar-home-icon" /> {/* Icono de casa */}
          <span>Home</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
