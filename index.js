const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//Crear server express
const app = express();

//Directorio público
//middleware función que se ejecuta en el momento que alguien hace petición al servidor
app.use( express.static('public') )

// Rutas
// app.get("/", (req,res) =>{
//   res.json({
//     ok:true
//   })
// })

//Escuchar peticiones
app.listen(PORT, () => {
  console.log(`servidor corriendo en puerto ${PORT}`)
})