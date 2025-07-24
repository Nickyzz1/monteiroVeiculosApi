import {Request, Response, NextFunction } from "express"
import Vehicle from "../models/vehicle";
import { Op } from "sequelize";

export const vehicleCreateMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.body) {
        res.status(400).send('Corpo da requisição ausente.')
        return
    }

    if (!req.body.Brand || !req.body.Model || !req.body.Year || !req.body.Plate || !req.body.Chassi || !req.body.Renavam) {
      res.status(400).send('Campos obrigatórios ausentes.');
      return
    }
    const vehicleExists = await Vehicle.findOne({
      where: {
        [Op.or]: [
          { Plate: req.body.Plate },
          { Chassi: req.body.Chassi },
          { Renavam: req.body.Renavam }
        ]
      }
    });

    if (vehicleExists) {
      res.status(400).send('Placa, chassi ou renavam já cadastrados!')
      return
    }
    return next()
}

export const vehicleByIdMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const vehicleExists = await Vehicle.findByPk(id);
    if (!vehicleExists) {
        res.status(404).send("Veículo não encontrado");
        return
    }

}