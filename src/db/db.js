import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool;

export default async function connectDB() {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const connection = await pool.getConnection();
    console.log('✅ MySQL conectado com sucesso!');
    connection.release();
  } catch (err) {
    console.error('❌ Erro ao conectar no MySQL:', err);
  }
}

export function getPool() {
  return pool;
}
