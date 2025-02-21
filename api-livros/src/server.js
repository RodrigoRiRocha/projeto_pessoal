console.log("Server is starting...");

const express = require("express"); // Importa o Express 🚀
const pool = require("./db"); // Importa a conexão com o banco de dados
const app = express(); // Inicializa o servidor 🚀
const port = 3000; // Define a porta 🚀

app.use(express.json()); // Middleware para interpretar JSON

// 📌 Rota GET /livros -> Retorna a lista de livros do banco de dados
app.get("/livros", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM livros");
        res.json(result.rows);
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        res.status(500).json({ error: "Erro ao buscar livros" });
    }
});

// 📌 Rota POST /livros -> Adiciona um novo livro no banco de dados
app.post("/livros", async (req, res) => {
    try {
        const { titulo, isbn, numero_paginas, autores, editora, sinopse, data_lancamento } = req.body;

        if (!titulo || !isbn || !numero_paginas || !autores) {
            return res.status(400).json({ error: "Campos obrigatórios: titulo, isbn, numero_paginas, autores" });
        }

        const result = await pool.query(
            "INSERT INTO livros (titulo, isbn, numero_paginas, autores, editora, sinopse, data_lancamento) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [titulo, isbn, numero_paginas, autores, editora, sinopse, data_lancamento]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Erro ao cadastrar livro:", error);
        res.status(500).json({ error: "Erro ao cadastrar livro" });
    }
});

// 📌 Inicia o servidor
app.listen(port, () => {
    console.log(`🔥 Servidor rodando em http://localhost:${port}`);
});
