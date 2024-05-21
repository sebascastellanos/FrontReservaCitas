import React, { useState } from 'react';
import { getCitas } from '../api/api';

export default function DispoPage() {
  const [fechaHora, setFechaHora] = useState('');
  const [disponible, setDisponible] = useState(false);
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleConsultarDisponibilidad = async () => {
    try {
      setLoading(true);
      // Obtener todas las citas del backend
      const citasData = await getCitas();
      setCitas(citasData);

      // Extraer solo las fechas de las citas
      const fechasReservadas = citasData.map((cita) => cita.fechaHora.split('T')[0]);

      // Verificar si la fecha seleccionada está en las fechas reservadas
      const fechaSeleccionada = fechaHora.split('T')[0];
      setDisponible(!fechasReservadas.includes(fechaSeleccionada));
    } catch (error) {
      console.error('Error al consultar la disponibilidad:', error);
      setDisponible(false); // Manejo de errores: establecer como no disponible en caso de error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Consultar Disponibilidad de Cita</h2>
      <div style={formContainerStyle}>
        <label style={labelStyle}>
          Seleccione la fecha y hora para consultar disponibilidad:
          <input
            style={inputStyle}
            type="datetime-local"
            value={fechaHora}
            onChange={(e) => setFechaHora(e.target.value)}
          />
        </label>
        <button
          style={buttonStyle}
          onClick={handleConsultarDisponibilidad}
          disabled={loading}
        >
          {loading ? 'Consultando...' : 'Consultar Disponibilidad'}
        </button>
      </div>
      {fechaHora && (
        <div style={resultContainerStyle}>
          <p style={resultStyle}>
            La cita para la fecha y hora {fechaHora} está{' '}
            <span style={disponible ? availableStyle : bookedStyle}>
              {disponible ? 'disponible' : 'reservada'}
            </span>.
          </p>
        </div>
      )}
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f8ff',
  fontFamily: 'Arial, sans-serif',
};

const titleStyle = {
  marginBottom: '20px',
  fontSize: '24px',
};

const formContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
};

const labelStyle = {
  marginBottom: '10px',
  fontSize: '16px',
};

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#add8e6',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
};

const resultContainerStyle = {
  textAlign: 'center',
};

const resultStyle = {
  fontSize: '18px',
};

const availableStyle = {
  color: 'green',
};

const bookedStyle = {
  color: 'red',
};
