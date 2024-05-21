// App.js

import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

import React from "react";
import ClientePage from "./pages/ClientePage";
import EstilistaPage from "./pages/EstilistaPage";
import ServiciosPage from "./pages/ServicioPage";
import CitaPage from "./pages/CitaPage";
import DispoPage from "./pages/DispoPage";

function App() {
  return (
    <div className="App">
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            background: "#282c34",
            fontSize: "20px",
          }}
        >
          <Link to={"/"} style={{ color: "white" }}>
            Home
          </Link>
          <Link
            to={"/cliente"}
            style={{
              color: "white",
            }}
          >
            Cliente
          </Link>
          <Link
            to={"/estilista"}
            style={{
              color: "white",
            }}
          >
            Estilista
          </Link>
          <Link
            to={"/servicio"}
            style={{
              color: "white",
            }}
          >
            Servicio
          </Link>
          <Link
            to={"/cita"}
            style={{
              color: "white",
            }}
          >
            Cita
          </Link>
          <Link
            to={"/dispo"}
            style={{
              color: "white",
            }}
          >
            Dispo
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cliente" element={<ClientePage />} />
        <Route path="/estilista" element={<EstilistaPage />} />
        <Route path="/servicio" element={<ServiciosPage />} />
        <Route path="/cita" element={<CitaPage />} />
        <Route path="/dispo" element={<DispoPage />} />
      </Routes>
    </div>
  );
}

export default App;
