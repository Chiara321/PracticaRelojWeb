document.addEventListener('DOMContentLoaded', function() {
    getDailyQuote();
});

function getDailyQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/phrase'); // Cambia la URL a tu servidor proxy en localhost
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var quoteContainer = document.getElementById('dailyPhrase');
            quoteContainer.innerHTML = '<p>' + response.phrase + '</p><p>- ' + response.author + '</p>';
        } else {
            console.log('Error al obtener la frase del día');
            var quoteContainer = document.getElementById('dailyPhrase');
            quoteContainer.innerHTML = '<p>No se pudo cargar la frase del día.</p>';
        }
    };
    xhr.onerror = function() {
        console.log('Error de red al obtener la frase del día');
        var quoteContainer = document.getElementById('dailyPhrase');
        quoteContainer.innerHTML = '<p>Error de red al obtener la frase del día.</p>';
    };
    xhr.send();
}

let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000);

