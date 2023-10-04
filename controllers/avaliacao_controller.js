const express = require("express");
const router = express.Router();
const Avaliacao = require("../models/avaliacao");

router.get("/", async (req, res) => {
    res.json(await Avaliacao.find());
});

router.get("/:id", async (req, res) => {
    res.json(await Avaliacao.findById(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await Avaliacao.create(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await Avaliacao.findByIdAndUpdate(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
    res.json(await Avaliacao.findByIdAndRemove(req.params.id));
});

module.exports = router;
