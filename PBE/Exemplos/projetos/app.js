const express = require("express");
const app = express();
const PORT = 8081;
const fs = require("fs");

app.get("/produtos/", (req, res) => {

    try {
        // Ler o arquivo JSON
        const data = fs.readFileSync('./produtos.json', "utf-8");

        //transformar o JSON em objeto JS
        //parse transformat o Json em Js, e o stringfy faz o ao contrario 
        let produtos = JSON.parse(data)

        const {nomeProduto} = req.query;
        if (nomeProduto){
            // filter vai percorrer o array e vai pecorre os efeitos que pasarem na condição ele não altera o array original! - gera um novo
            produtos = produtos.filter(
                produto => produto.nome.toLowerCase() //para ingnorar maiusculas para minusculas e convertemos tudo para minusculas
                .include()
            )
        }
        const {precoProduto} = req.query;
        if (precoProduto){
            produtos = produtos.filter(
                (produto) => produto.preco >= parseFloat(precoProduto)
            )
        }
        //Retornar uma lista
        res.status(200).json(produtos);


    } catch (error) {
        console.error("Erro ao ler o arquivo JSON", error);
        res.status(500).json({message: "Erro interno do servidor"})
    }

})

// Ultima linha
app.listen(PORT, () => {
    console.log(`Servidor rodando em https://localhost:${PORT}`)
});