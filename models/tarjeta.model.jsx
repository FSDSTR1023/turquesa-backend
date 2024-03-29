// .models/tarjeta.model.jsx

const { url } = require('inspector');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tarjeta = new Schema({
    id_usuario: String,
    nombre: String,
    categoria: String, 
    imagen_principal: String, // Direccion de la imagen
    datos_personalizados: Object,
    imagenes: Object
});

module.exports = mongoose.model("Tarjeta", tarjeta);