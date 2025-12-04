//Nesta atividade usei o Query

const express = require('express');
const app = express();
const PORT = 8081


//  Adicao
app.get('/adicao/', (req, res) => { //Rota get de adicao
    try {
        const { num1, num2 } = req.query;
        let resul = parseFloat(num1) + parseFloat(num2)
        if (num1 == undefined || num2 == undefined || isNaN(num1, num2)) {
            return res.status(400).send(`Foram inseridos letras ou numeros indefinidos`)
        }


        res.status(200).send(`A adição de ${num1} e ${num2} é ${resul}`)


    } catch (erro) {
        console.error(`Erro: ${erro}`)
        res.status(500).send(`Erro interno do servidor, porfavor espere um momento ou contate o suporte`)
    }
})

app.get('/subtracao/', (req, res) => { //Rota get de adicao
    try {
        const { num1, num2 } = req.query;
        let resul = parseFloat(num1) - parseFloat(num2)
        if (num1 == undefined || num2 == undefined || isNaN(num1, num2)) {
            return res.status(400).send(`Foram inseridos letras ou numeros indefinidos`)
        }
        // Caso necessario para o numero negativo e ele nao queira mostrar (porque? Nao sei, achei legal)

        // if (resul < 0){
        //     return res.status(400).send(`  Negativo  `)
        // }


        res.status(200).send(`A adição de ${num1} e ${num2} é ${resul}`)


    } catch (erro) {
        console.error(`Erro: ${erro}`)
        res.status(500).send(`Erro interno do servidor, porfavor espere um momento ou contate o suporte`)
    }
})

//  Divisao
app.get('/divisao/', (req, res) => {
    try {
        const { num1, num2 } = req.query;
        let resultado = parseFloat(num1) / parseFloat(num2)
        if (num1 == undefined || num2 == undefined || isNaN(num1, num2, resultado)) {
            return res.status(400).send(`Foram inseridos letras ou numeros indefinidos`)
        }
        else if (num1 === 0 || num2 === 0) {
            return res.status(400).send(`Infinito`)
        }


        res.status(200).send(`A divisao de ${num1} e ${num2} é ${(resultado.toFixed(3))}`)


    } catch (erro) {
        console.error(`Erro: ${erro}`)
        res.status(500).send(`Erro interno do servidor, porfavor espere um momento ou contate o suporte`)
    }
})

//Multiplicacao
app.get('/multiplicacao/', (req, res) => {
    try {
        const { num1, num2 } = req.query;
        let resultado = parseFloat(num1) * parseFloat(num2)
        if (num1 == undefined || num2 == undefined || isNaN(num1, num2, resultado)) {
            return res.status(400).send(`Como voce vai fazer uma multiplicacao com LETRAS? Ou um numero esta invalido!`)
        }

        res.status(200).send(`A multiplicacao de ${num1} e ${num2} é ${(resultado)}`)


    } catch (erro) {
        console.error(`Erro: ${erro}`)
        res.status(500).send(`Erro interno do servidor, porfavor espere um momento ou contate o suporte`)
    }
})


// ultima linha do Codigo
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});