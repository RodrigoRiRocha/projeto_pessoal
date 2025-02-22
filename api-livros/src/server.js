const express = require('express');
const pool = require('./db');
const app = express();

app.use(express.json());

// Rota GET /livros -> Retorna a lista de livros com paginação
app.get("/livros", async (req, res) => {
    try {
        const { limit = 10, offset = 0 } = req.query;

        const [result] = await pool.query(
            "SELECT * FROM livros ORDER BY id DESC LIMIT ? OFFSET ?",
            [parseInt(limit), parseInt(offset)]
        );

        res.json(result);
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        res.status(500).json({ error: "Erro ao buscar livros" });
    }
});

// Rota POST /livros -> Adiciona um novo livro
app.post("/livros", async (req, res) => {
    try {
        const { titulo, isbn, numero_paginas, autores, editora, sinopse, data_lancamento } = req.body;

        if (!titulo || !isbn || !numero_paginas || !autores) {
            return res.status(400).json({ error: "Campos obrigatórios: titulo, isbn, numero_paginas, autores" });
        }

        if (data_lancamento && new Date(data_lancamento).getFullYear() < 2000) {
            return res.status(400).json({ error: "A data de lançamento não pode ser anterior ao ano 2000" });
        }

        const [result] = await pool.query(
            "INSERT INTO livros (titulo, isbn, numero_paginas, autores, editora, sinopse, data_lancamento) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [titulo, isbn, numero_paginas, autores, editora, sinopse, data_lancamento]
        );

        res.status(201).json({ id: result.insertId, titulo, isbn, numero_paginas, autores, editora, sinopse, data_lancamento });
    } catch (error) {
        console.error("Erro ao cadastrar livro:", error);
        res.status(500).json({ error: "Erro ao cadastrar livro" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
