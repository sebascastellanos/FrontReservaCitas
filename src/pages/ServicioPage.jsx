import React, { useState } from "react";
import { createService } from "../api/api";

function ServiciosPage() {
  const [idServicio, setIdServicio] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [duracion, setDuracion] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createService({
        idServicio,
        nombre,
        descripcion,
        precio,
        duracion,
      });
      console.log("Respuesta del backend:", response);
      alert("Si");
    } catch (error) {
      console.error("Error al crear la reserva:", error);
      alert("no");
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
      <h2>Registro de Servicios</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          ID:
          <input
            type="text"
            value={idServicio}
            onChange={(e) => setIdServicio(e.target.value)}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Nombre:
          <select
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={inputStyle}
          >
            <option value="">Selecciona un nombre</option>
            <option value="Barbería">Barbería</option>
            <option value="Cortes">Cortes</option>
            <option value="Tintes">Tintes</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Keratina">Keratina</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
        </label>
        <label style={labelStyle}>
          Descripción:
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Precio:
          <input
            type="text"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Duración:
          <input
            type="text"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            style={inputStyle}
          />
        </label>
        <button type="submit" style={{ ...buttonStyle, ...buttonHoverStyle }}>
          Registrar
        </button>
      </form>
    </div>
  );
}

export default ServiciosPage;
