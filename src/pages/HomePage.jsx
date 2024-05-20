// src/components/HomeScreen.jsx
import React from 'react';



function HomePage() {
        

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


    return (
        <div style={homeStyle}>
            <h1>Bienvenido a la Peluquería</h1>
            
        </div>
    );
}

export default HomePage;
