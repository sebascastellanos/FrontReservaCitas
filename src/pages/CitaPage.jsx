import React, { useState, useEffect } from "react";
import {
  createCita,
  getClientes,
  getEstilistas,
  getServicios,
  getCitas,
  deleteCita,
} from "../api/api";

function CitaPage() {
  const [idCita, setIdCita] = useState("");
  const [selectedCliente, setSelectedCliente] = useState("");
  const [selectedEstilista, setSelectedEstilista] = useState("");
  const [selectedServicio, setSelectedServicio] = useState("");
  const [fechaHora, setFechaHora] = useState("");
  const [estado, setEstado] = useState("Pendiente");
  const [clientes, setClientes] = useState([]);
  const [estilistas, setEstilistas] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [citas, setCitas] = useState([]);
  const [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const clientesData = await getClientes();
      setClientes(clientesData);

      const estilistasData = await getEstilistas();
      setEstilistas(estilistasData);

      const serviciosData = await getServicios();
      setServicios(serviciosData);

      const citasData = await getCitas();
      setCitas(citasData);
    };
    fetchData();
  }, []);

  const handleUpdate = (cita) => {
    setIdCita(cita.idCita);
    setSelectedCliente(
      clientes.find((cliente) => cliente.idCliente === cita.cliente.idCliente)
    );
    setSelectedEstilista(
      estilistas.find(
        (estilista) => estilista.idEstilista === cita.estilista.idEstilista
      )
    );
    setSelectedServicio(
      servicios.find(
        (servicio) => servicio.idServicio === cita.servicio.idServicio
      )
    );
    setFechaHora(cita.fechaHora);
    setEstado(cita.estado);
    setEditingMode(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const citaDate = new Date(fechaHora);
    const hours = citaDate.getHours();

    if (hours < 9 || hours > 19) {
      alert(
        "No se puede agendar una cita fuera del horario de 9:00 AM a 7:00 PM."
      );
      return;
    }

    try {
      const citaData = {
        idCita: parseInt(idCita),
        cliente: { idCliente: selectedCliente.idCliente },
        estilista: { idEstilista: selectedEstilista.idEstilista },
        servicio: { idServicio: selectedServicio.idServicio },
        fechaHora,
        estado,
      };

      console.log("Solicitud enviada al backend:", citaData);
      const response = await createCita(citaData);
      console.log("Respuesta del backend:", response);
      alert("Cita creada con éxito");

      // Actualizar la lista de citas después de crear una nueva cita
      const updatedCitas = await getCitas();
      setCitas(updatedCitas);
    } catch (error) {
      console.error("Error al crear la cita:", error);
      alert("Hubo un error al crear la cita");
    }
  };

  const handleDelete = async (idCita) => {
    try {
      await deleteCita(idCita);
      alert("Cita eliminada con éxito");

      // Actualizar la lista de citas después de eliminar una cita
      const updatedCitas = await getCitas();
      setCitas(updatedCitas);
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
      alert("Hubo un error al eliminar la cita");
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #681692, #3F9216)",
    fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
  };
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
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

  const citaStyle = {
    backgroundColor: "#ffe4e1",
    padding: "10px",
    borderRadius: "15px",
    margin: "10px 0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const cancelButtonStyle = {
    backgroundColor: "#ff6347",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const updateBottonStyle = {
    backgroundColor: "#3097CB",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const contentWrapperStyle = {
    overflowY: "auto", // Permite el scroll vertical
    maxHeight: "90vh", // Asegura que el contenido no se extienda más allá de la pantalla
    width: "100%",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <h2>Reserva tu cita</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>
            ID Cita:
            <input
              type="text"
              value={idCita}
              onChange={(e) => setIdCita(e.target.value)}
              style={inputStyle}
              disabled={editingMode} 
            />
          </label>
          <label style={labelStyle}>
            Cliente:
            <select
              value={selectedCliente ? selectedCliente.nombre : ""}
              onChange={(e) => {
                const selectedClienteObj = clientes.find(
                  (cliente) => cliente.nombre === e.target.value
                );
                setSelectedCliente(selectedClienteObj || "");
              }}
              style={inputStyle}
              disabled={editingMode} 
            >
              <option value="">Selecciona un cliente</option>
              {clientes.map((cliente) => (
                <option key={cliente.idCliente} value={cliente.nombre}>
                  {cliente.nombre}
                </option>
              ))}
            </select>
          </label>
          <label style={labelStyle}>
            Estilista:
            <select
              value={selectedEstilista ? selectedEstilista.nombre : ""}
              onChange={(e) => {
                const selectedEstilistaObj = estilistas.find(
                  (estilista) => estilista.nombre === e.target.value
                );
                setSelectedEstilista(selectedEstilistaObj || "");
              }}
              style={inputStyle}
              disabled={editingMode} 
            >
              <option value="">Selecciona un estilista</option>
              {estilistas.map((estilista) => (
                <option key={estilista.idEstilista} value={estilista.nombre}>
                  {estilista.nombre}
                </option>
              ))}
            </select>
          </label>
          <label style={labelStyle}>
            Servicio:
            <select
              value={selectedServicio ? selectedServicio.nombre : ""}
              onChange={(e) => {
                const selectedServicioObj = servicios.find(
                  (servicio) => servicio.nombre === e.target.value
                );
                setSelectedServicio(selectedServicioObj || "");
              }}
              style={inputStyle}
              disabled={editingMode} 
            >
              <option value="">Selecciona un servicio</option>
              {servicios.map((servicio) => (
                <option key={servicio.idServicio} value={servicio.nombre}>
                  {servicio.nombre}
                </option>
              ))}
            </select>
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
          <button
          type="submit"
          style={{ ...buttonStyle, ...buttonHoverStyle }}
        >
          {editingMode ? "Actualizar" : "Reservar"}
        </button>
        </form>

        <h2>Citas guardadas</h2>
        <div>
          {citas.map((cita) => (
            <div key={cita.idCita} style={citaStyle}>
              <p>
                <strong>ID Cita:</strong> {cita.idCita}
              </p>
              <p>
                <strong>Cliente:</strong> {cita.cliente.nombre}
              </p>
              <p>
                <strong>Estilista:</strong> {cita.estilista.nombre}
              </p>
              <p>
                <strong>Servicio:</strong> {cita.servicio.nombre}
              </p>
              <p>
                <strong>Fecha y Hora:</strong> {cita.fechaHora}
              </p>
              <p>
                <strong>Estado:</strong> {cita.estado}
              </p>

              <button
                style={{ ...cancelButtonStyle, marginRight: "10px" }}
                onClick={() => handleDelete(cita.idCita)}
              >
                Cancelar
              </button>
              <button
                style={updateBottonStyle}
                onClick={() => handleUpdate(cita)}
              >
                Reprogramar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CitaPage;
