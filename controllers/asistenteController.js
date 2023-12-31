const Asistente = require('../models/asistente.model');

async function getAsistentes(req,res) {
    Asistente.find()
        .then(tarjetas => {
            console.log('Asistentes encontrados: ', tarjetas)
            res.status(200).json(tarjetas)
        })
        .catch(err => {
            console.log('Error al recuperar los asistentes: ', err)
            res.status(400).json(err)
        });
}

async function updateAsistente(req,res) {
    const asistenteAActualizar = req.body;
    Asistente.findByIdAndUpdate(req.params.id, {$set: asistenteAActualizar})
        .then(asistente => {
            console.log('Asistente actualizado: ', asistente)
            res.status(200).json(asistente)
        })
        .catch(err => {
            console.log('Error al actualizar el asistente: ', err)
            res.status(400).json(err)
        });
}

async function crearAsistente(req, res) {
    const asistente= req.body;
    asistente.id = Math.random().toString(36);
    Asistente.create(asistente)
    .then(asistente => {
        console.log(`Asistente creado: ${asistente}`)
        res.status(200).json(asistente)
    })
    .catch(err => {
        console.log('Error al crear el asistente: ', err)
        res.status(400).json(err)
    });
}

async function borrarAsistente(req,res) {
    Asistente.findByIdAndDelete(req.params.id)
        .then(asistente => {
            console.log('Asistente borrado: ', asistente)
            res.status(200).json(asistente)
        })
        .catch(err => {
            console.log('Error al borrar el asistente: ', err)
            res.status(400).json(err)
        });
}

module.exports = {
    getAsistentes,
    updateAsistente,
    crearAsistente,
    borrarAsistente
}