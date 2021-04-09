const { response } = require("express");


const getEventos = async (req, res = response) => {


  try {

    res.status(201).json({
      ok: true,
      msg: 'getEventos'
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const crearEvento = async (req, res = response) => {

  try {

    res.status(201).json({
      ok: true,
      msg: 'crearEvento'
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const actualizarEvento = async (req, res = response) => {

  try {

    res.status(201).json({
      ok: true,
      msg: 'actualizarEvento'
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const eliminarEvento = async (req, res = response) => {

  try {

    res.status(201).json({
      ok: true,
      msg: 'eliminarEvento'
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};


module.exports = { getEventos, crearEvento, actualizarEvento, eliminarEvento };