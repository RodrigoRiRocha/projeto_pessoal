const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',          // Usuário do PostgreSQL
    host: 'host.docker.internal', // Conectar ao PostgreSQL no Docker
    database: 'seu_banco',     // Nome do banco de dados
    password: 'postgres',     // Senha do PostgreSQL
    port: 5432,                // Porta padrão do PostgreSQL
});

pool.connect()
    .then(() => console.log('🔥 Conectado ao PostgreSQL no Docker!'))
    .catch(err => console.error('🚨 Erro na conexão:', err));
