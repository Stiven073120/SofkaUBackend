const mongoose = require('mongoose');

const naveSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    tipoNave: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
            required: true
    },
    velocidadMax: {
        type: Number,
        required: true
    },
    tipoCombustible: {
        type: String,
        required: true
    },
    empuje: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Nave', naveSchema);