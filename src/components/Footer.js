// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Curso de HCI. Todos los derechos reservados.</p>
        <p className="footer-credits">
          Diseñado con <span className="heart">❤</span> por el equipo de HCI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
