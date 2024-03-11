import { Pool } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

// Configuração de conexão com o banco de dados:
const user = process.env.PG_USER || 'admin';
const host = process.env.PG_HOST || 'localhost';
const database = process.env.PG_DB || 'facilita_juridico';
const password = process.env.PG_PASSWORD || 'mypassword';
const port = Number(process.env.PG_PORT) || 5432;

const pool = new Pool({
  user,
  host,
  database,
  password,
  port,
});

// Função para testar a conexão com o banco de dados
async function testDBConnection() {
  try {
    await pool.query('SELECT 1');
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

export { pool, testDBConnection };