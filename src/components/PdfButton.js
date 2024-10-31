import React from 'react';

const PdfButton = () => {
  // URL del PDF (puede ser un archivo alojado en tu servidor o un enlace externo)
  const pdfUrl = "/assets/docs/HCI_proyecto.pdf"; // Reemplaza esto con la URL real de tu PDF

  const openPdf = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
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
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PdfButton;
