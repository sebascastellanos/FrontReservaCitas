// src/components/HomeScreen.jsx
import React from 'react';

function HomePage() {
    const handleStartClick = () => {
        alert('Iniciando proceso de reserva...');
    };

    // Definir los estilos en línea
    const homeStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
        color: 'white',
        fontSize: 'calc(10px + 2vmin)',
    };

    const buttonStyle = {
        backgroundColor: '#61dafb',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        padding: '10px 20px',
        fontSize: '20px',
        cursor: 'pointer',
        marginTop: '20px'
    };

    return (
        <div style={homeStyle}>
            <h1>Bienvenido a la Peluquería</h1>
            <button style={buttonStyle} onClick={handleStartClick}>
                Empezar
            </button>
        </div>
    );
}

export default HomePage;
