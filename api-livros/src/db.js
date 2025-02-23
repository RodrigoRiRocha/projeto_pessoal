const mysql = require('mysql2/promise'); 

// Configuração da conexão com o banco de dados usando variáveis de ambiente
const pool = mysql.createPool({
    host: process.env.DB_HOST || "db",
    user: process.env.DB_USER || "root", 
    password: process.env.DB_PASSWORD || "mysql", 
    database: process.env.DB_NAME || "livros", 
    port: process.env.DB_PORT || 3306, 
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
