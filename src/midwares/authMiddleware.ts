import { Request, Response, NextFunction } from "express";
import { AuthLoginRequestDTO } from "../dto/authDto";
import User from "../models/user";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data: AuthLoginRequestDTO = await req.body;
            
        if (!data.Email || !data.Password) {
            res.status(400).send('Email ou senha faltantes!');
            return;
        }

        const user = await User.findOne({ where: { Email: data.Email }, attributes: {include: ['Password']} });

        if (!user) {
            res.status(404).send("Usuário não encontrado.");
            return
        }

        return next(); 
    } catch (error) {
        next(error); 
    }
};
