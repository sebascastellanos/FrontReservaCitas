
// src/api/api.js

// Función para crear una reserva

export const createReservation = async (reservationData) => {
    try {
      const response = await fetch('http://localhost:8080/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error al crear la reservación:', error);
      throw error;
    }
  };

// Función para registrar un estilista
export const createStylist = async (stylistData) => {
    try {
        const response = await fetch('http://localhost:8080/estilistas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(stylistData),
        });
    
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error al crear la reservación:', error);
        throw error;
      }
};

// Función para registrar un servicio
export const createService = async (serviceData) => {
    try {
        const response = await fetch('http://localhost:8080/servicios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(serviceData),
        });
    
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error al crear la reservación:', error);
        throw error;
      }
};



export const createCita = async (citaData) => {
    try {
        const response = await fetch('http://localhost:8080/citas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(citaData),
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al crear la cita:', error);
        throw error;
    }
};



export const getClientes = async () => {
    try {
      const response = await fetch('http://localhost:8080/clientes'); // Ruta en tu backend para obtener clientes
      if (!response.ok) {
        throw new Error('Error al obtener los clientes');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  // Función para obtener estilistas
  export const getEstilistas = async () => {
    try {
      const response = await fetch('http://localhost:8080/estilistas'); // Ruta en tu backend para obtener estilistas
      if (!response.ok) {
        throw new Error('Error al obtener los estilistas');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  // Función para obtener servicios
  export const getServicios = async () => {
    try {
      const response = await fetch('http://localhost:8080/servicios'); // Ruta en tu backend para obtener servicios
      if (!response.ok) {
        throw new Error('Error al obtener los servicios');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  export async function getCitas() {
    try {
      const response = await fetch(`http://localhost:8080/citas`);
      if (!response.ok) {
        throw new Error("Error al obtener las citas");
      }
      const citas = await response.json();
      return citas;
    } catch (error) {
      console.error("Error en getCitas:", error);
      throw error;
    }
  }
  export const deleteCita = async (idCita) => {
    try {
      const response = await fetch(`http://localhost:8080/citas/eliminar/${idCita}`, {
        method: "DELETE",
    });

    // Verificar si la respuesta tiene contenido
    if (response.status === 204) {
      // No hay contenido en la respuesta (204 No Content)
      return { success: true };
    } else {
      // Analizar la respuesta como JSON
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error al eliminar la cita:", error);
    throw error;
  }
  };