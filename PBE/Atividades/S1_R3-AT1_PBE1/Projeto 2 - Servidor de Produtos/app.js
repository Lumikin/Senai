// Projeto 2 - Servidor de Produtos/app.js
// ---
// Variavel para usar o Express
const express = require("express");

// Iniciando o Express para o servidor 
const porta = 80; //Porta padrao HTTP
const Server = express();
Server.listen(porta, () => {
    console.log(`Bem Vindo ao Servidor de Produtos, o servidor iniciou na porta ${porta}`)
});
 