// authService.ts
import User from '../models/user';
import { AuthLoginRequestDTO } from '../dto/authDto';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');

export const authService = async (data: AuthLoginRequestDTO) => {
    const user = await User.findOne({ where: { Email: data.Email }, attributes: { include: ['Password'] } });

    if (!user) throw new Error("Usuário não encontrado");

    // TS não sabe que Password existe, então usamos getDataValue
    const passwordHash = user.getDataValue('Password');

    const isPasswordValid = await bcrypt.compare(data.Password, passwordHash);
    if (!isPasswordValid) throw new Error("Senha incorreta.");

    const jwtSecret = process.env.SECRET;
    if (!jwtSecret) throw new Error("Erro ao gerar chave de acesso");

    const token = jwt.sign(
        { id: user.getDataValue('IDUser'), Name: user.getDataValue('Name'), Email: user.getDataValue('Email') },
        jwtSecret,
        { expiresIn: '730h' }
    );

    return { token };
}
