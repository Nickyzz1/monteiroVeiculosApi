import { Request, Response } from 'express';
import { LogService } from '../services/logService';

export const createLog = async (req: Request, res: Response) => {
  try {
    const { Description, Date } = req.body;

    if (!Description || !Date) {
      return res.status(400).json({ error: 'Description e Date são obrigatórios' });
    }

    // Criar o log
    const newLog = await LogService.createLog({ Description, Date });

    res.status(201).json(newLog);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const log = await LogService.getAll();
    res.json(log);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
