// Projeto 3 - servidor de pedidos/App.js
// ---
// Variavel para ultilizar o express
const express = require("express");

//Inicializando o Express
const porta = 80; //Porta HTTP
const Server = express();
Server.listen(porta, () => {
    console.log(`Bem Vindo ao servidor de pedidos, o servidor esta rodando na porta ${porta}`)
});
