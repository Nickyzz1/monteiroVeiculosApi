import app from './App';
import  sequelize from './config/database';

const PORT = 8080;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco estabelecida com sucesso.');
    await sequelize.sync(); // Cria as tabelas se não existirem
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (err) {
    console.error('Erro ao conectar com o banco:', err);
  }
})();
