const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuario = new Schema({
    id_plantilla: String,
    nombre: String,
    confirmacion: String, //S (Confirma), N (No confirma), E (Espera respuesta)
    email: String
});

module.exports = mongoose.model("Usuario", usuario);