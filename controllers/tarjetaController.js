const Tarjeta = require('../models/tarjeta.model.jsx');

async function getTarjetas(req,res) {
    Tarjeta.find()
        .then(tarjetas => {
            console.log('Tarjetas encontradas: ', tarjetas)
            res.status(200).json(tarjetas)
        })
        .catch(err => {
            console.log('Error al recuperar las tarjetas: ', err)
            res.status(400).json(err)
        });
}

async function updateTarjeta(req,res) {
    const tarjetaAActualizar = req.body;
    Tarjeta.findByIdAndUpdate(req.params.id, {$set: tarjetaAActualizar})
        .then(tarjeta => {
            console.log('Tarjeta actualizada: ', tarjeta)
            res.status(200).json(tarjeta)
        })
        .catch(err => {
            console.log('Error al actualizar la tarjeta: ', err)
            res.status(400).json(err)
        });
}

async function crearTarjeta(req, res) {
    const tarjeta= req.body;
    tarjeta.id = Math.random().toString(36);
    Tarjeta.create(tarjeta)
    .then(tarjeta => {
        console.log(`Tarjeta creada: ${tarjeta}`)
        res.status(200).json(tarjeta)
    })
    .catch(err => {
        console.log('Error al crear la tarjeta: ', err)
        res.status(400).json(err)
    });
}

async function borrarTarjeta(req,res) {
    Tarjeta.findByIdAndDelete(req.params.id)
        .then(tarjeta => {
            console.log('Tarjeta borrada: ', tarjeta)
            res.status(200).json(tarjeta)
        })
        .catch(err => {
            console.log('Error al borrar la tarjeta: ', err)
            res.status(400).json(err)
        });
}

module.exports = {
    getTarjetas,
    updateTarjeta,
    crearTarjeta,
    borrarTarjeta
}