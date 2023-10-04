const express = require("express");
const router = express.Router();
const Usuario = require("../models/usuario");


router.get("/", async (req, res) => {
    // Livro.find().then(livros => {
    //     res.json(livros);
    // });
    res.json(await Usuario.find()); // testado, ja lista todos
});

router.get("/:id", async (req, res) => {
    res.json(await Usuario.findById(req.params.id)); // testado ja esta buscando pelo id
});

router.post("/", async (req, res) => {
    res.json(await new Usuario(req.body).save()); // testado ja salva pelo id
});


router.put("/:id", async (req, res) => {
    res.json(await Usuario.findByIdAndUpdate(req.params.id, req.body)); // update atualizar
});

router.delete("/:id", async (req, res) => {
    res.json(await Usuario.findByIdAndRemove(req.params.id)); 
});

module.exports = router;