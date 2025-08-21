import { Request, Response, NextFunction } from 'express';
import { createUser, getUser, getUserById, removeUser } from '../services/userService';
import User from '../models/user';


// Função para criar senha numérica aleatória
function passGenerator(quantidade: number, min: number, max: number): string {
  const numeros: number[] = [];
  for (let i = 0; i < quantidade; i++) {
    numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numeros.join('');
}

// Cria um novo usuário
export const CreateUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const users = await createUser(data?.Name, data?.Email, data?.Password);
    return res.status(201).json(users);
  } catch (err) {
        console.error("Erro ao criar usuário:", err);
    return res.status(500).send("Internal server error")
  }
};

// Lista todos os usuários
export const GetUser = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(await getUser());
  } catch (err) {
    console.error("Erro ao buscar usuários:", err);
    return res.status(500).send("Internal server error")
  }
};

// Busca usuário por ID
export const GetUserById = async (req: Request, res: Response) => {
  try {
      const user = await getUserById(req);
      return res.status(201).json(user);
    } catch (err) {
      console.error("Erro ao busscar usuário por ID:", err);
      return res.status(500).send("Internal server error")
  }
};

// Remove usuário por ID
export const RemoveUser = async (req: Request, res: Response) => {
  try {
    await removeUser(req)
    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (err) {
    console.error("Erro ao deletar usuário:", err);
    return res.status(500).send("Internal server error")
  }
};
