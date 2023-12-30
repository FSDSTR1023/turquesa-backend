const Usuario = require('../models/usuario.model');

async function getUsuarios(req,res) {
    Usuario.find()
        .then(usuarios => {
            console.log('Usuarios encontrados: ', usuarios)
            res.status(200).json(usuarios)
        })
        .catch(err => {
            console.log('Error al recuperar los usuarios: ', err)
            res.status(400).json(err)
        });
}

async function updateUsuario(req,res) {
    const usuarioAActualizar = req.body;
    Usuario.findByIdAndUpdate(req.params.id, {$set: usuarioAActualizar})
        .then(usuario => {
            console.log('Usuario actualizado: ', usuario)
            res.status(200).json(usuario)
        })
        .catch(err => {
            console.log('Error al actualizar el usuario: ', err)
            res.status(400).json(err)
        });
}

async function crearUsuario(req, res) {
    const usuario= req.body;
    usuario.id = Math.random().toString(36);
    Usuario.create(usuario)
    .then(usuario => {
        console.log(`Usuario creado: ${usuario}`)
        res.status(200).json(usuario)
    })
    .catch(err => {
        console.log('Error al crear el usuario: ', err)
        res.status(400).json(err)
    });
}

async function borrarUsuario(req,res) {
    Usuario.findByIdAndDelete(req.params.id)
        .then(usuario => {
            console.log('Usuario borrado: ', usuario)
            res.status(200).json(usuario)
        })
        .catch(err => {
            console.log('Error al borrar el usuario: ', err)
            res.status(400).json(err)
        });
}

module.exports = {
    getUsuarios,
    updateUsuario,
    crearUsuario,
    borrarUsuario
}