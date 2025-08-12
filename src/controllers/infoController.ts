import { Router, Request, Response } from 'express';
import { InfoService } from '../services/infoService';


export class infoController  {
    
    // GET - todas as infos
    static infoGetAll = async (req: Request, res: Response) => {
      try {
        const infos = await InfoService.getAllInfo();
        res.json(infos);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    };

    // POST - criar nova info
   static infoCreate = async (req: Request, res: Response) => {
      try {
        const created = await InfoService.createInfo(req.body);
        res.status(201).json(created);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    };
    
    // PUT - atualizar info por ID
    static infoPut = async (req: Request, res: Response) => {
      try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
          return res.status(400).json({ error: 'ID inválido' });
        }
        const updated = await InfoService.updateInfo(id, req.body);
        res.json(updated);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    };
}

