const express = require("express");
const naveSchema = require("../models/naves");

const router = express.Router();

// Crear nave
router.post('/create_nave', (req, res) => {
    const nave = new naveSchema(req.body);
    nave
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// Obtener todas las naves 
router.get('/naves', (req, res) => {
    naveSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// Obtener nave por id 
router.get('/nave/:id', (req, res) => {
    const {id} = req.params;
    naveSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// Modificar nave
router.put('/update_nave/:id', (req, res) => {
    const {id} = req.params;
    const {nombre, tipoNave, peso, velocidadMax, tipoCombustible, empuje} = req.body;
    naveSchema
        .updateOne({ _id: id }, {$set: {nombre, tipoNave, peso, velocidadMax, tipoCombustible, empuje}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

// Eliminar 
router.delete('/remove_nave/:id', (req, res) => {
    const {id} = req.params;
    naveSchema
        .remove({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});


module.exports = router;