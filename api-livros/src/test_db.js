const pool = require("./db");

(async () => {
    try {
        const res = await pool.query("SELECT NOW()");
        console.log("✅ Banco conectado!", res.rows);
    } catch (err) {
        console.error("❌ Erro ao conectar no banco:", err);
    } finally {
        pool.end();
    }
})();
