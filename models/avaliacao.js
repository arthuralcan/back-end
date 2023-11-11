const mongoose = require("mongoose");

const AvaliacaoSchema = new mongoose.Schema({
    livro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livro'
    },
    nota: {
        type: Number,
        required: true
    },
    comentario: String
});

module.exports = mongoose.model("Avaliacao", AvaliacaoSchema);