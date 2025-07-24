import User from '../models/user';
import { AuthLoginRequestDTO } from '../dto/authDto';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');

export const authService = async (data: AuthLoginRequestDTO) => {

    const user = await User.findOne({ where: { Email: data.Email }, attributes: {include: ['Password']} });
    const isPasswordValid = await bcrypt.compare(data.Password, user?.dataValues.Password);
    
    if (!isPasswordValid) {
        throw new Error("Senha incorreta.");
    }

    const jwtSecret = process.env.SECRET;
    if (!jwtSecret) {
        throw new Error("erro ao gerar chave de acesso");
    }

    const token = jwt.sign({id: user?.IDUser, Name:user?.Name, Email: user?.Email}, jwtSecret, { expiresIn: '730h' });

    return token
}
