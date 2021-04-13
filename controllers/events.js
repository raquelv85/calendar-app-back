const { response } = require("express");
const Evento = require("../models/Evento");

const getEventos = async (req, res = response) => {
  const eventos = await Evento.find().populate("user", "name");

  res.status(201).json({
    ok: true,
    eventos: eventos,
  });
};

const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;
    const eventoGuardado = await evento.save();

    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador...",
    });
  }
};

const actualizarEvento = async (req, res = response) => {
  const eventoId = req.params.id;

  try {

    const evento = await Evento.findById(eventoId);

    if(!evento){
      res.status(404).json({
        ok: false,
        msg: 'Evento no existe por ese id'
      })
    }

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador...",
    });
  }
};

const eliminarEvento = (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: "eliminarEvento",
  });
};

module.exports = { getEventos, crearEvento, actualizarEvento, eliminarEvento };
