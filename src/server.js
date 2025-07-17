import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import initRoutes from './routes/routes.js';
import connectDB from './db/db.js';

dotenv.config();
// const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

await connectDB(); // conexão com MySQL

initRoutes(app); // rotas

app.listen(port, () => {
  console.log(`🚀 Servidor rodando: http://localhost:${port}`);
});
