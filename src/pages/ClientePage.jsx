import React, { useState } from 'react';
import { createReservation } from '../api/api';

function ClientePage() {
    const [idCliente, setIdCliente] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await createReservation({ idCliente, nombre, telefono, correoElectronico });
            console.log('Respuesta del backend:', response);
            alert("Si")
        } catch (error) {
            console.error('Error al crear la reserva:', error);
            alert("no")
        }
    };
    
    

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #00f5a0, #009688)',
        fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
    };
    

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const labelStyle = {
        marginBottom: '10px',
        fontSize: '18px',
    };

    const inputStyle = {
        marginLeft: '10px',
        padding: '5px',
        borderRadius: '5px',
        border: '2px solid #add8e6',
    };

    const buttonStyle = {
        marginTop: '20px',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#add8e6',
        fontSize: '18px',
        cursor: 'pointer',
    };

    const buttonHoverStyle = {
        backgroundColor: '#87ceeb',
    };

    return (
        <div style={containerStyle}>
            <h2>Reserva tu cita</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label style={labelStyle}>
                    ID:
                    <input
                        type="text"
                        value={idCliente}
                        onChange={(e) => setIdCliente(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Teléfono:
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Correo:
                    <input
                        type="email"
                        value={correoElectronico}
                        onChange={(e) => setCorreoElectronico(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <button
                    type="submit"
                    style={{ ...buttonStyle, ...buttonHoverStyle }}
                >
                    Reservar
                </button>
            </form>
        </div>
    );
}

export default ClientePage;
