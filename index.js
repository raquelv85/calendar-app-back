const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const { dbConnection } = require('./database/config');
const cors = require('cors');

//Crear server express
const app = express();

//Base de datos
dbConnection();

// CORS
app.use(cors());

//Directorio público
//middleware función que se ejecuta en el momento que alguien hace petición al servidor
app.use( express.static('public') )

// Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/api/auth', require('./routes/auth'))

app.use('/api/events', require('./routes/events'))


//Escuchar peticiones
app.listen(PORT, () => {
  console.log(`servidor corriendo en puerto ${PORT}`)
})