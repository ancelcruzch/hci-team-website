import React from 'react';

// Componente PdfButton que recibe la URL del PDF como prop
const PdfButton = ({ pdfUrl }) => {
  // Función para abrir el PDF en una nueva pestaña
  const openPdf = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.error('URL del PDF no proporcionada');
    }
  };

  return (
    <button onClick={openPdf} style={styles.button}>
      Abrir PDF
    </button>
  );
};

// Estilos opcionales para el botón
const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#1b5e20',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PdfButton;