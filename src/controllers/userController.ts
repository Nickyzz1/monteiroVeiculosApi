import { Request, Response, NextFunction } from 'express';
import { createUser } from '../services/userService';
import { randomInt } from 'crypto';
import User from '../models/user';
import { CreateUserRequestDTO } from '../dto/userDto';

// create user

export const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    
    if(!data.Name || !data.Email) {
      
      return res.status(400).send('Argumentos faltantes')
    }
    const qtd = 6
    const min = 0
    const max = 9

  function passGenerator(quantidade: number, min: number, max: number): string {
    const numeros: number[] = [];
    for (let i = 0; i < quantidade; i++) {
      numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numeros.toString().replace(/[,\s]+/g, '');
  }

  const firstPass = passGenerator(qtd,min, max)
  console.log(firstPass)

  const user = await createUser(data.Name, data.Email, firstPass.toString());
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const GetUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findAll()
  console.log(JSON.stringify(user, null, 2))
  return res.status(201).json(user)
}

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