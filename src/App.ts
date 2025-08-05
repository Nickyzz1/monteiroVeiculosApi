import express from 'express';
import routes from './routes';
import  cors  from 'cors';

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // ou '*' se quiser liberar tudo (apenas em dev)
  methods: ['GET', 'POST', 'PUT', "PATCH", 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(routes);

export default app;
