fetchEventData();

async function fetchEventData() {
    try {
        const response = await fetch('https://foxybotpy.onrender.com/event_data');
        
        if (response.ok) {
            const data = await response.json();
            //event_starting = data.time_remaining + timedelta(minutes=5);
            
            document.getElementById('event-image').src = data.event_image;
            
            if (parseInt(data.time_remaining) <= 0) {
                document.getElementById('event-time').textContent = "AHORA!";
                return
            } else if(data.event_image == 'https://wiki.gla.com.br/images/a/a5/AnyEvent.png') {
                document.getElementById('event-time').textContent = data.time_remaining;
            }else{
                document.getElementById('event-time').textContent = formatTimeRemaining(parseInt(data.time_remaining));
            }
        } else {
            console.error('Error al obtener los datos del evento:', response.statusText);
        }
    } catch (error) {
        console.error('Error al obtener los datos del evento:', error);
    }
}

function formatTimeRemaining(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let timeString = '';

    if (hours > 0) {
        timeString += hours === 1 ? '1 hora' : `${hours} horas`;
    }
    if (remainingMinutes > 0) {
        if (timeString) {
            timeString += ' y ';
        }
        timeString += remainingMinutes === 1 ? '1 minuto' : `${remainingMinutes} minutos`;
    }
    return timeString || '0 minutos';
}

setInterval(fetchEventData, 60000);