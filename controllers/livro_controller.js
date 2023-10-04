const express = require("express");
const router = express.Router();
const Livro = require("../models/livro");


router.get("/", async (req, res) => {
    // Livro.find().then(livros => {
    //     res.json(livros);
    // });
    res.json(await Livro.find()); // testado, ja lista todos
});

router.get("/:id", async (req, res) => {
    res.json(await Livro.findById(req.params.id)); // testado ja esta buscando pelo id
});

router.post("/", async (req, res) => {
    res.json(await new Livro(req.body).save()); // testado ja salva pelo id
});


router.put("/:id", async (req, res) => {
    res.json(await Livro.findByIdAndUpdate(req.params.id, req.body)); // update atualizar
});

router.delete("/:id", async (req, res) => {
    res.json(await Livro.findByIdAndRemove(req.params.id)); 
});

module.exports = router;