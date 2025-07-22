import User from '../models/user';
import bcrypt from 'bcrypt';

export const createUser = async (Name: string, Email: string, Password: string) => {
  const hashedPassword = await bcrypt.hash(Password, 10);
  const user = await User.create({ Name : Name, Email: Email, Password: hashedPassword, IsAdmin: 1});
  return user;
};
 