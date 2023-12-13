const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuario = new Schema({
    id_plantilla: String,
    fecha: String,
    confirmacion: Boolean,
});

module.exports = mongoose.model("Usuario", usuario);