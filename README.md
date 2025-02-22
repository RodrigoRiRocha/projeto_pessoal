# Projeto API de Livros

Este projeto é uma API para gerenciar um banco de dados de livros. Ele permite adicionar, listar e buscar livros com paginação.

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- Docker
- Docker Compose

## Configuração do Ambiente

### Pré-requisitos

- Docker
- Docker Compose

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/RodrigoRiRocha/projeto_pessoal.git
   cd projeto_pessoal
   ```

2. Configure o ambiente usando Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Acesse a API em `http://localhost:3000`.

### Executando a Aplicação

A aplicação será iniciada automaticamente pelo Docker Compose.

## Endpoints

### GET /livros

Retorna a lista de livros com paginação.

- Parâmetros de consulta:
  - `limit`: Número de livros por página (padrão: 10)
  - `offset`: Deslocamento para paginação (padrão: 0)

### POST /livros

Adiciona um novo livro.

- Corpo da requisição (JSON):
  ```json
  {
    "titulo": "Título do Livro",
    "isbn": "1234567890",
    "numero_paginas": 200,
    "autores": "Autor 1, Autor 2",
    "editora": "Editora Exemplo",
    "sinopse": "Sinopse do livro",
    "data_lancamento": "2023-01-01"
  }
  ```

## Testando a API

Você pode testar a API usando ferramentas como Postman.


## Testando a API com Postman

Você pode testar a API usando Postman. Siga os passos abaixo:

1. Abra o Postman.
2. Crie uma nova requisição.

### Testando o endpoint GET /livros

1. Selecione o método GET.
2. Insira a URL `http://localhost:3000/livros`.
3. Adicione os parâmetros de consulta `limit` e `offset` conforme necessário.
4. Clique em "Send" para enviar a requisição.

### Testando o endpoint POST /livros

1. Selecione o método POST.
2. Insira a URL `http://localhost:3000/livros`.
3. Vá para a aba "Body" e selecione "raw".
4. Selecione "JSON" no menu suspenso.
5. Insira o corpo da requisição no formato JSON, por exemplo:
   ```json
   {
     "titulo": "Novo Livro",
     "isbn": "9876543210",
     "numero_paginas": 150,
     "autores": "Autor Exemplo",
     "editora": "Editora Exemplo",
     "sinopse": "Sinopse do novo livro",
     "data_lancamento": "2023-01-01"
   }
   ```
6. Clique em "Send" para enviar a requisição.
