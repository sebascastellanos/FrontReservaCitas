import React, { useState } from 'react';

function HomePage() {
    // Estado para controlar si el mouse está sobre el título
    const [isMouseOver, setIsMouseOver] = useState(false);

    // Estilos en línea para el componente
    const homeContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(45deg, #ffbe0b, #fb5607, #ff006e)',
        transition: 'background-color 2s', // Transición suave para el cambio de color de fondo
    };

    // Estilos en línea para el título
    const titleStyle = {
        color: isMouseOver ? 'white' : 'black',
        fontSize: '3rem',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '10px',
        cursor: 'pointer', // Cambia el cursor cuando pasas el mouse sobre el título
        boxShadow: isMouseOver ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none', // Efecto de sombra cuando pasas el mouse sobre el título
    };

    // Función para manejar el evento onMouseOver del título
    const handleMouseOver = () => {
        setIsMouseOver(true);
    };

    // Función para manejar el evento onMouseOut del título
    const handleMouseOut = () => {
        setIsMouseOver(false);
    };

    return (
        <div style={homeContainerStyle}>
            <h1 
                style={titleStyle} 
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}
            >
                Bienvenido a la Peluquería
            </h1>
        </div>
    );
}

export default HomePage;
