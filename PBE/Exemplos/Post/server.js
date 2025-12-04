const express = require("express")
const app = express()
let PORT = 8081

app.use(express.json());

app.get('/usuarios', (req, res) => {
    try {
        res.status(201).json({ message: 'Pagina criada com sucesso' });
    } catch (error) {
        res.status(500).json(error);
    }
})

app.post('/usuarios', (req, res) => {
    try {
        const { novoUsuario } = req.body;
        console.log(novoUsuario);
        res.status(201).json({ message: 'Usuario criado com sucesso' });
    } catch (error) {
        res.status(500).json(error);
    }
})

app.listen(PORT, () => {
    console.log(`O servidor esta rodando em http://localhost:${PORT}`)
})