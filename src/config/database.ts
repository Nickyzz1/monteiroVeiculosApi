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

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexão ok');

//     // Cria tabelas sem se preocupar com defaults
//     await sequelize.sync({ alter: true });

//     // Depois aplica os defaults manualmente
//     await sequelize.query(`
//       IF NOT EXISTS (
//         SELECT * FROM sys.default_constraints
//         WHERE object_id = OBJECT_ID(N'[DF_UserTb_IsAdmin]')
//       )
//       ALTER TABLE UserTb
//       ADD CONSTRAINT DF_UserTb_IsAdmin DEFAULT 0 FOR IsAdmin;
//     `);

//     console.log('Defaults aplicados');
//   } catch (err) {
//     console.error('Erro:', err);
//   }
// })();

export default sequelize;
