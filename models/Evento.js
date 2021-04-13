const {Schema, model} = require('mongoose');

const EventoSchema = Schema({

  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    require: true,
  },
  end: {
    type: Date,
    require: true,
  },
  user: {
    //Es una referencia al usuario
    type: Schema.Types.ObjectId, 
    ref: 'Usuario'
  }

});

module.exports = model('Evento', EventoSchema)
