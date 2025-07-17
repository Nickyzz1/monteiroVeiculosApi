import { getPool } from '../db/db.js';

export default function initRoutes(app) {
  app.get('/', (req, res) => {
    res.send('API Monteiro Veículos está online!');
  });

  app.get('/veiculos', async (req, res) => {
    try {
      const pool = getPool();
      const [rows] = await pool.query('SELECT * FROM veiculos');
      res.json(rows);
    } catch (err) {
      console.error('Erro ao buscar veículos:', err);
      res.status(500).json({ message: 'Erro no servidor' });
    }
  });
}
