// Projeto 1 - servidor de usuarios/server.js
// ---
// Chamando o Express para ultilizar ele 
const express = require("express");

//Criando uma instancia do express
const porta = 80; //Variavel para ultilizar a porta padrao HTTP
const Server = express()
const Empresa = "Sua empresa aqui"
Server.listen(porta, () => {
    console.log(`Bem Vindo ao Servidor de Usuarios, o servidor esta sendo inicializado na porta ${porta}`)
});


