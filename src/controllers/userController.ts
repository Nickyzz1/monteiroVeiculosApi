import { Request, Response, NextFunction } from 'express';
import { createUser } from '../services/userService';
import { randomInt } from 'crypto';
import User from '../models/user';
import { CreateUserRequestDTO } from '../dto/userDto';

// Função para criar senha numérica aleatória
function passGenerator(quantidade: number, min: number, max: number): string {
  const numeros: number[] = [];
  for (let i = 0; i < quantidade; i++) {
    numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numeros.join('');
}

// Cria um novo usuário
export const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;

    if (!data.Name || !data.Email) {
      return res.status(400).send('Argumentos faltantes');
    }

    const senhaGerada = passGenerator(6, 0, 9);

    const user = await createUser(data.Name, data.Email, senhaGerada);
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// Lista todos os usuários
export const GetUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

// Busca usuário por ID
export const GetUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userExists = await User.findByPk(id);

    if (!userExists) {
      return res.status(404).send("Usuário não encontrado");
    }

    return res.status(200).json(userExists);
  } catch (err) {
    next(err);
  }
};

// Remove usuário por ID
export const RemoveUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    await user.destroy();
    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    next(error);
  }
};
