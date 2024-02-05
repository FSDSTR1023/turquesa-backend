const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuario = new Schema({
    email: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Usuario", usuario);