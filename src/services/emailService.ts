// import nodemailer from 'nodemailer';
// import type Mail from 'nodemailer/lib/mailer';
// import dotenv from 'dotenv';

// dotenv.config();

// let transporter: Mail | null = null;

// function getTransporter(): Mail {
//   if (!transporter) {
//     transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: Number(process.env.EMAIL_PORT),
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });
//   }

//   return transporter;
// }

// // Envia e-mail de recuperação
// export async function sendPasswordResetEmail(to: string, code: string): Promise<void> {
//   const mailer = getTransporter();

//   const mailOptions = {
//     from: `"Plataforma Iduca" <${process.env.EMAIL_USER}>`,
//     to,
//     subject: 'Recuperação de senha',
//     html: `
//       <h2>Recuperação de Senha - Iduca</h2>
//       <p>Seu código é:</p>
//       <h3>${code}</h3>
//     `,
//   };

//   await mailer.sendMail(mailOptions);
//   console.log(`E-mail de recuperação enviado para ${to}`);
// }

// // Envia e-mail de boas-vindas
// export async function sendWelcomeEmail(to: string, tempPass: string): Promise<void> {
//   const mailer = getTransporter();

//   const mailOptions = {
//     from: `"Plataforma Iduca" <${process.env.EMAIL_USER}>`,
//     to,
//     subject: 'Bem-vindo(a) à Plataforma Iduca!',
//     html: `
//       <h2>Conta criada!</h2>
//       <p>E-mail: ${to}</p>
//       <p>Senha temporária: ${tempPass}</p>
//     `,
//   };

//   await mailer.sendMail(mailOptions);
//   console.log(`E-mail de boas-vindas enviado para ${to}`);
// }
