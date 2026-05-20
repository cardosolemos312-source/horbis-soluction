console.log("Servidor atualizado");
const express = require("express");
const path = require("path");

const app = express();

// pasta pública
app.use(express.static(path.join(__dirname, "public")));

// HOME
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});


// LOJAS
app.get("/lojas", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "lojas.html"));
});

// IMÓVEIS
app.get("/imoveis", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "imoveis.html"));
});

// VIAGENS
app.get("/viagens", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "viagens.html"));
});

// VISTOS
app.get("/vistos", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "visto.html"));
});

// HOTÉIS
app.get("/hoteis", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "hoteis.html"));
});

// CONTACTOS
app.get("/contactos", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contacto.html"));
});

// servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});