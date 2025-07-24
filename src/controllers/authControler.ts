import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/authService';

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    
  try {
    const token = await authService(req.body);
    return res.status(200).json({ token });
  } catch (error: any) {
    console.error("Erro ao autenticar usuário:", error);
    return res.status(500).send("Internal server error")
  }
};

