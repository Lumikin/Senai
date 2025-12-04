// O arquivo em back-end pode ser chamado tanto como App.js quanto Index.js, para não confundir o arquivo do front-end
// ------
// importa o express para usar as suas ultilidades 
const express = require("express");
const Porta = 8081

//Tem que ser a ultima linha do codigo 
// Cria uma instancia do express, que representa o aplicativo web
const app = express(); // Muitas pessoas usam a constante Server
app.listen(Porta, ()=> {
    console.log(`Servidor Rodando na porta 8081 ${Porta}`)
});
