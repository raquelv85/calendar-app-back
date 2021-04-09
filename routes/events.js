/*
  Rutas de usuarios / Events
  host + /api/events
*/

const { Router } = require("express");
const router = Router();
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento
} = require("../controllers/auth");

// Obtener eventos
router.get('/', getEventos);

// Crear nuevo evento
router.post('/new', crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);