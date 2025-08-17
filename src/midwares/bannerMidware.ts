import { Request, Response, NextFunction } from 'express';
import Banner from '../models/banner';

export const checkOrderUnique = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { Image, Order } = req.body;
    const { id } = req.params; // pega o id do banner que está sendo editado
    if (Order === undefined) return res.status(400).json({ message: 'Order é obrigatório' });

    const existing = await Banner.findOne({ where: { Order: Order } });

    // Se existe outro banner com essa ordem, bloqueia
    if (existing && existing.IDBanner !== Number(id)) {
      return res.status(400).json({ message: `Já existe um banner com a ordem ${Order}` });
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao validar ordem' });
  }
};
