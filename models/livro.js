const mongoose = require("mongoose");

const LivroSchema = {
    nome: String,
    descricao: String,
    categoria: String,
    autor: String,
    valor: Number,
    foto: String
};

module.exports = mongoose.model("Livro", LivroSchema);