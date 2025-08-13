import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME!, // 'monteiroveiculos'
  '',                   // usuário vazio porque é autenticação integrada
  '',                   // senha vazia
  {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
      authentication: {
        type: 'ntlm',
        options: {
          domain: 'br',        // seu domínio ou nome da máquina
          userName: 'siq7ct',  // seu usuário Windows
          password: process.env.DB_PASSWORD,     
        },
      },
      options: {
        encrypt: false,                 // geralmente false localmente
        trustServerCertificate: true,
        instanceName: 'SQLEXPRESS',    // nome da instância
      },
    },
    port: Number(process.env.DB_PORT || 1433),
    logging: false,
  }
);

export default sequelize;
