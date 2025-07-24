import { Request, Response, NextFunction } from "express";
import { AuthLoginRequestDTO } from "../dto/authDto";
import User from "../models/user";

export const userCreateMidware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data = req.body;

        if (!data.Name || !data.Email) {
            res.status(400).send('Argumentos faltantes');
            return
        }

        return next(); 
    } catch (error) {
        next(error); 
    }
};

export const userByIdMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const userExists = await User.findByPk(id);

    if (!userExists) {
    res.status(404).send("Usuário não encontrado");
    return
    }
    return next(); 
}
