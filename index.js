const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//Crear server express
const app = express();

//Directorio público
//middleware función que se ejecuta en el momento que alguien hace petición al servidor
app.use( express.static('public') )

// Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: Eventos

//Escuchar peticiones
app.listen(PORT, () => {
  console.log(`servidor corriendo en puerto ${PORT}`)
})