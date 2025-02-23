-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS livros;

-- Uso do banco de dados
USE livros;

-- Criação da tabela livros
CREATE TABLE IF NOT EXISTS livros (
    id INT AUTO_INCREMENT PRIMARY KEY, -- ID auto-incrementado e chave primária
    titulo VARCHAR(255) NOT NULL, -- Título do livro (obrigatório)
    isbn VARCHAR(20) NOT NULL, -- ISBN do livro (obrigatório)
    numero_paginas INT NOT NULL, -- Número de páginas do livro (obrigatório)
    autores VARCHAR(255) NOT NULL, -- Autores do livro (obrigatório)
    editora VARCHAR(255), -- Editora do livro (opcional)
    sinopse TEXT, -- Sinopse do livro (opcional)
    data_lancamento DATE -- Data de lançamento do livro (opcional)
);
