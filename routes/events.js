/*
  Rutas de usuarios / Events
  host + /api/events
*/

const { Router } = require("express");
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
} = require("../controllers/events");

//Validar token en todos los endpoints para que estén protegidas
router.use(validarJWT)

// Obtener eventos
router.get('/', getEventos);

// Crear nuevo evento
router.post('/', crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;