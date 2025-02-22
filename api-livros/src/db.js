const mysql = require('mysql2/promise');

// Configuração da conexão
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "livros",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Teste de conexão
pool.getConnection()
    .then(connection => {
        console.log("Conexão bem-sucedida ao MySQL!");
        connection.release();
    })
    .catch(err => {
        console.error("Erro ao conectar ao MySQL:", err);
    });

module.exports = pool;
