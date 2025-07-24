import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/authService';

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    
  try {
    const token = await authService(req.body);
    return res.status(200).json({ token });
  } catch (error: any) {
    if (error.message === "Senha incorreta.") {
      return res.status(401).send("Senha incorreta.");
    }
    if (error.message === "erro ao gerar chave de acesso") {
      return res.status(500).send("Erro ao gerar token JWT.");
    }
    console.error("Erro ao autenticar usuário:", error);
    return res.status(500).send("Erro interno do servidor.");
  }
};

