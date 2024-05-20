import React, { useState } from "react";
import { createCita } from "../api/api";

function CitaPage() {
  const [idCita, setIdCita] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [idEstilista, setIdEstilista] = useState("");
  const [idServicio, setIdServicio] = useState("");
  const [fechaHora, setFechaHora] = useState("");
  const [estado, setEstado] = useState("Pendiente");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const citaData = {
        idCita: parseInt(idCita),
        cliente: {
          idCliente: parseInt(idCliente),
        },
        estilista: {
          idEstilista: parseInt(idEstilista),
        },
        servicio: {
          idServicio: parseInt(idServicio),
        },
        fechaHora,
        estado,
      };

      const response = await createCita(citaData);
      console.log("Respuesta del backend:", response);
      alert("Cita creada con éxito");
    } catch (error) {
      console.error("Error al crear la cita:", error);
      alert("Hubo un error al crear la cita");
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
    fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const labelStyle = {
    marginBottom: "10px",
    fontSize: "18px",
  };

  const inputStyle = {
    marginLeft: "10px",
    padding: "5px",
    borderRadius: "5px",
    border: "2px solid #add8e6",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#add8e6",
    fontSize: "18px",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#87ceeb",
  };

  return (
    <div style={containerStyle}>
      <h2>Reserva tu cita</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          ID Cita:
          <input
            type="text"
            value={idCita}
            onChange={(e) => setIdCita(e.target.value)}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Cliente:
          <input
            type="text"
            value={idCliente}
            onChange={(e) => setIdCliente(e.target.value)}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Estilista:
          <input
            type="text"
            value={idEstilista}
            onChange={(e) => setIdEstilista(e.target.value)}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Servicio:
          <input
            type="text"
            value={idServicio}
            onChange={(e) => setIdServicio(e.target.value)}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Fecha y Hora:
          <input
            type="datetime-local"
            value={fechaHora}
            onChange={(e) => setFechaHora(e.target.value)}
            style={inputStyle}
          />
        </label>
        <button type="submit" style={{ ...buttonStyle, ...buttonHoverStyle }}>
          Reservar
        </button>
      </form>
    </div>
  );
}

export default CitaPage;
