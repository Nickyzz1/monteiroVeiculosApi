import { Request, Response, NextFunction } from 'express';
import Banner from '../models/banner';

export const checkOrderUnique = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { Order, Local } = req.body;
    const { id } = req.params; // usado na edição

    if (Order === undefined || Local === undefined) {
      return res.status(400).json({ message: 'Order e Local são obrigatórios' });
    }

    // Busca se já existe outro banner com mesma ordem **na mesma página**
    const existing = await Banner.findOne({ 
      where: { 
        Order: Order, 
        Local: Local 
      } 
    });

    // Bloqueia se encontrar outro banner com a mesma ordem e for diferente do que está sendo editado
    if (existing && (!id || existing.IDBanner !== Number(id))) {
      return res.status(400).json({ message: `Já existe um banner com a ordem ${Order} nesta página` });
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao validar ordem' });
  }
};
