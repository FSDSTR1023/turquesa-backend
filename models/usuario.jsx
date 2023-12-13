const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuario = new Schema({
    email: String
});

module.exports = mongoose.model("Usuario", usuario);