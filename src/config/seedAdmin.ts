// import bcrypt from 'bcrypt';
// import User from '../src/models/user';

// export const seedAdminUser = async () => {
//   try {
//     const adminEmail = process.env.ADMIN_EMAIL;
//     const adminPassword = process.env.ADMIN_PASSWORD;

//     if (!adminEmail || !adminPassword) {
//       console.log('Credenciais de admin padrão não definidas no .env. Pulando o seeding.');
//       return;
//     }

//     // Verifica se o admin já existe
//     const existingAdmin = await User.findOne({ where: { email: adminEmail } });

//     if (!existingAdmin) {
//       const hashedPassword = await bcrypt.hash(adminPassword, 10);

//       await User.create({
//         name: 'Admin Monteiro Veículos',
//         email: adminEmail,
//         password: hashedPassword,
//         isAdmin: 1,
//         firstAccess: false,
//       });

//       console.log('Usuário admin criado com sucesso.');
//     } else {
//       console.log('Usuário admin já existe. Nenhuma ação realizada.');
//     }
//   } catch (error) {
//     console.error('Erro ao criar o usuário admin padrão:', error);
//   }
// };
