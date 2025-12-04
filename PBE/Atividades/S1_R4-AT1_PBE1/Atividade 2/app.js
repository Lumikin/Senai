const express = require('express');
const app = express();
const PORT = 8081

app.get('/calculadora/', (res, req) => {
    try {
        const {num1, num2} = req.query;
        let operacoes
        
        
        switch ('operacoes') {
            case 'soma':

                let adicao = num1 + num2 
                return res.status(200).send(`A adição de ${num1} e ${num2} é ${adicao}`)
                break;
                
                default:
                    break;
                }
                
         
    } catch (error) {
        
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});