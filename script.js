
/**
 * Calcula la diferencia desglosada entre dos fechas.
 * @param {number} targetTime - Timestamp objetivo.
 * @param {number} currentTime - Timestamp actual.
 * @returns {Object|null} - Objeto con el desglose o null si el tiempo expiró.
 */
function calcularDiferenciaTiempo(targetTime, currentTime) {
    const gap = targetTime - currentTime;

    if (gap <= 0) return null;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    return {
        dias: Math.floor(gap / day),
        horas: Math.floor((gap % day) / hour),
        minutos: Math.floor((gap % hour) / minute),
        segundos: Math.floor((gap % minute) / second)
    };
}

const targetDate = new Date('January 31, 2026 21:00:00').getTime();

const renderCountdown = () => {
    const ahora = new Date().getTime();
    const tiempo = calcularDiferenciaTiempo(targetDate, ahora);

    // Si la lógica de negocio dice que el tiempo expiró (null)
    if (!tiempo) {
        document.querySelector('.contador-titulo').innerText = "¡LLEGÓ EL DÍA!";
        document.querySelector('.contador-box').style.display = 'none';
        return;
    }

    // Actualizamos los IDs que definimos en el nuevo HTML rosado
    document.getElementById('days').innerText = tiempo.dias.toString().padStart(2, '0');
    document.getElementById('hours').innerText = tiempo.horas.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = tiempo.minutos.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = tiempo.segundos.toString().padStart(2, '0');
};

// Mantenemos tus intervalos originales
setInterval(renderCountdown, 1000);
renderCountdown();