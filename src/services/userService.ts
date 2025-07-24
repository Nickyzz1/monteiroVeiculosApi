import { Request } from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';

// Função para criar senha numérica aleatória
function passGenerator(quantidade: number, min: number, max: number): string {

  const numeros: number[] = [];
  for (let i = 0; i < quantidade; i++) {
    numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numeros.join('');
}

export const createUser = async (Name: string, Email: string) => {

  const password = passGenerator(6, 0, 9);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ Name : Name, Email: Email, Password: hashedPassword, IsAdmin: 1});
  return user;
};

export const getUser = async() => {

  const users = await User.findAll();
  return users;
}

export const getUserById = async (req: Request) => {

  const { id } = req.params;
  const user = User.findByPk(id)
  return user;

};


export const removeUser = async (req: Request) => {

  const { id } = req.params;
  const user = await User.findByPk(id);
  await user?.destroy();
};


 