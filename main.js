require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


// criando servidor web com express
const app = express();

// configurando seridor web
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// conectando os controllers ao servidor web
app.use("/livros", require("./controllers/livro_controller"));
app.use("/usuarios", require("./controllers/usuario_controller"));
app.use("/avaliacao", require("./controllers/avaliacao_controller"));


console.log("Conectando banco de dados...");
mongoose.connect(process.env.URL_BANCO).then(() => {
    console.log("Iniciando banco de dados...");
    app.listen(parseInt(process.env.PORTA_SERVIDOR), () => {
        console.log(`o servidor Está no ar em http://localhost:${process.env.PORTA_SERVIDOR}`);
    });
});
 

