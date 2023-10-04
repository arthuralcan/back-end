const mongoose = require("mongoose");

const UsuarioSchema = {
    nome: String,
    sobrenome: String,
    idade: Number,
    email: String,
    senha: String
};

module.exports = mongoose.model("Usuario", UsuarioSchema);