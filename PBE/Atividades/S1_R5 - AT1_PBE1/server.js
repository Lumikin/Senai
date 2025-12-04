const express = require("express")
const app = express()
let PORT = 8081

app.use(express.json());

app.get('/login', (req, res) => {
    try {
        res.status(201).json({ message: 'Oi! faça o login' });
    } catch (error) {
        res.status(500).json(error);
    }
})

app.post('/login', (req, res) => {
    try {
        const { usuarios } = req.body;
        if (usuarios.nome == "Lucas" && usuarios.senha == "senhaforte") {
            res.status(201).json({ message: `Olá ${usuarios.nome}`})
        }
        else{
            res.status(500).json({ message: 'Usuario ou senha incorretos!' });
            
        }

    } catch (error) {
        res.status(500).json(error);
    }
})

app.listen(PORT, () => {
    console.log(`O servidor esta rodando em http://localhost:${PORT}`)
})