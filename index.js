const express = require('express');
require('dotenv').config();

console.log(process.env)

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
app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})