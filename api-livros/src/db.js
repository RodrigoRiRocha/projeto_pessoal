const mysql = require('mysql2/promise'); // Importa o módulo mysql2 com suporte a Promises

// Configuração da conexão com o banco de dados usando variáveis de ambiente
const pool = mysql.createPool({
    host: process.env.DB_HOST || "db", // Host do banco de dados (usando o nome do serviço do Docker Compose)
    user: process.env.DB_USER || "root", // Usuário do banco de dados
    password: process.env.DB_PASSWORD || "mysql", // Senha do banco de dados
    database: process.env.DB_NAME || "livros", // Nome do banco de dados
    port: process.env.DB_PORT || 3306, // Porta do banco de dados
    waitForConnections: true, // Espera por conexões disponíveis
    connectionLimit: 10, // Limite de conexões no pool
    queueLimit: 0 // Limite de filas (0 = sem limite)
});

// Teste de conexão
pool.getConnection()
    .then(connection => {
        console.log("Conexão bem-sucedida ao MySQL!"); // Loga a mensagem de sucesso na conexão
        connection.release(); // Libera a conexão de volta ao pool
    })
    .catch(err => {
        console.error("Erro ao conectar ao MySQL:", err); // Loga o erro no console
    });

module.exports = pool; // Exporta o pool de conexões
