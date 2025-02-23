-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS livros;

-- Uso do banco de dados
USE livros;

-- Criação da tabela livros
CREATE TABLE IF NOT EXISTS livros (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    titulo VARCHAR(255) NOT NULL, 
    isbn VARCHAR(20) NOT NULL, 
    numero_paginas INT NOT NULL, 
    autores VARCHAR(255) NOT NULL, 
    editora VARCHAR(255), 
    sinopse TEXT, 
    data_lancamento DATE 
);
