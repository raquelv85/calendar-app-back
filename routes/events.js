/*
  Rutas de usuarios / Events
  host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');
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
router.post(
  '/', 
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    validarCampos
  ],
  crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;