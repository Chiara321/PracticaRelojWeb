const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importa el middleware CORS

const app = express();

// Middleware CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Configura una ruta para manejar las solicitudes a la API de la frase del día
app.get('/api/phrase', async (req, res) => {
    try {
        const response = await axios.get('https://frasedeldia.azurewebsites.net/api/phrase');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener la frase del día:', error.message);
        res.status(500).json({ error: 'Error al obtener la frase del día' });
    }
});

// Inicia el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor proxy corriendo en http://localhost:${PORT}`);
});