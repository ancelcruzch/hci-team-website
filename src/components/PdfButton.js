import React from 'react';

// Datos para las tarjetas de documentos
const pdfData = [
  { title: 'Propuesta Mejorada', url: '/assets/docs/propuesta.pdf' },
  { title: 'Entrevistas', url: '/assets/docs/entrevista.pdf' },
  { title: 'Needfinding', url: '/assets/docs/needfinding.pdf' },
  { title: 'StoryBoard', url: '/assets/docs/guion.pdf' },
  { title: 'Necesidades', url: '/assets/docs/detalles_necesidades.pdf' },
];

// Componente PdfButton que abre el PDF en una nueva pestaña
const PdfButton = ({ pdfUrl }) => {
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

// Componente que muestra los documentos en una fila
const DocumentRow = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Documentos</h2>
      <div style={styles.row}>
        {pdfData.map((pdf, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{pdf.title}</h3>
            <PdfButton pdfUrl={pdf.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    width: '100%',
    margin: '2rem auto',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0)',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#1b5e20',
    marginBottom: '20px',
  },
  row: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap', // Permite que las tarjetas pasen a la siguiente fila si no caben
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '15px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '18px',
    color: '#1b5e20',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '14px',
    backgroundColor: '#1b5e20',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default DocumentRow;
