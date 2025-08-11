import {Request, Response, NextFunction } from "express"
import Vehicle from "../models/vehicle";
import { Op } from "sequelize";

export const vehicleCreateMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (!req.body) {
    res.status(400).send('Corpo da requisição ausente.');
    return;
  }

  if (!req.body.Brand || !req.body.Model || !req.body.Year || 
      !req.body.Plate || !req.body.Engine || !req.body.Mileage || 
      !req.body.Transmission || !req.body.FuelType || !req.body.Category) {
    res.status(400).send('Campos obrigatórios ausentes.');
    return;
  }

  const whereConditions = [];

  if (req.body.Plate && req.body.Plate.trim() !== "") {
    whereConditions.push({ Plate: req.body.Plate.trim() });
  }
  if (req.body.Chassi && req.body.Chassi.trim() !== "") {
    whereConditions.push({ Chassi: req.body.Chassi.trim() });
  }
  if (req.body.Renavam && req.body.Renavam.trim() !== "") {
    whereConditions.push({ Renavam: req.body.Renavam.trim() });
  }

  if (whereConditions.length > 0) {
    const vehicleExists = await Vehicle.findOne({
      where: {
        [Op.or]: whereConditions
      }
    });

    if (vehicleExists) {
      res.status(400).send('Placa, chassi ou renavam já cadastrados!');
      return;
    }
  }

  return next();
};


export const vehicleByIdMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id = req.params.id;
    const vehicleExists = await Vehicle.findByPk(id);
    if (!vehicleExists) {
        res.status(404).send("Veículo não encontrado");
        return
    }

    return next()

}