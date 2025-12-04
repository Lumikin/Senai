
const express = require('express');
const app = express();
const PORT = 8081

app.get('/operacao/:tipo/', (req, res) => {
    try {


        const { tipo } = req.params;
        const { num1 } = req.query;
        const { num2 } = req.query;


        switch (tipo) {
            case 'soma':
                resultado = parseFloat(num1) + parseFloat(num2)
                break;
            case 'subtracao':
                resultado = parseFloat(num1) - parseFloat(num2)
                break;
            case 'multiplicacao':
                resultado = parseFloat(num1) * parseFloat(num2)
                break;
            case 'divisao':
                resultado = parseFloat(num1) / parseFloat(num2)
                break;

            default:
            return res.status(200).send(`Operacao Invalida`)
        }
        return res.status(200).send(`A ${tipo} é ${resultado}`)
    } catch (erro) {

    }
})
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});