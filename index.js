// Actualiza los datos cada 30 segundos
fetchEventData();  // Llama a la función inmediatamente al cargar la página
async function fetchEventData() {
    try {
        const response = await fetch('https://foxybotpy.onrender.com/event_data');
        
        if (response.ok) {
            const data = await response.json();
            console.log('Datos recibidos:', data); // Agregado para depuración
            document.getElementById('event-image').src = data.event_image;
            if(data.time_remaining==0){
                document.getElementById('event-time').textContent = "AHORA!";
            }else{
                document.getElementById('event-time').textContent = "Tiempo restante: " + data.time_remaining;
            }
        } else {
            console.error('Error al obtener los datos del evento:', response.statusText);
        }
    } catch (error) {
        console.error('Error al obtener los datos del evento:', error);
    }
}

// Configura el intervalo para actualizar los datos cada minuto
setInterval(fetchEventData, 60000); // 60000 ms = 1 minuto
// Llama a la función cuando la página se haya cargado
window.onload = fetchEventData;