import { CreateVehicleDto } from "../dto/vehicleDto"
import { Request, Response, NextFunction } from 'express';
import Vehicle from "../models/vehicle";
import { Op } from 'sequelize';

export const createVehicle = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      return res.status(400).send('Corpo da requisição ausente.');
    }

    const data: CreateVehicleDto = { ...req.body };
    console.log('Dados recebidos:', data);

    if (!data.Brand || !data.Model || !data.Year || !data.Plate || !data.Chassi || !data.Renavam) {
      return res.status(400).send('Campos obrigatórios ausentes.');
    }

    const vehicleExists = await Vehicle.findOne({
      where: {
        [Op.or]: [
          { Plate: data.Plate },
          { Chassi: data.Chassi },
          { Renavam: data.Renavam }
        ]
      }
    });

    if (vehicleExists) {
      return res.status(400).send('Placa, chassi ou renavam já cadastrados!');
    }

    const newCar = await Vehicle.create({
      Brand: data.Brand,
      Model: data.Model,
      Version: data.Version,
      Year: data.Year,
      Plate: data.Plate,
      Renavam: data.Renavam,
      Chassi: data.Chassi,
      Engine: data.Engine,
      Mileage: data.Mileage,
      Transmission: data.Transmission,
      HorsePower: data.HorsePower,
      Traction: data.Traction,
      Steering: data.Steering,
      Doors: data.Doors,
      FuelType: data.FuelType,
      Category: data.Category,
      Color: data.Color,
      Capacity: data.Capacity,
      CruiseControl: data.CruiseControl,
      AirConditioning: data.AirConditioning,
      OnBoardComputer: data.OnBoardComputer,
      PowerWindows: data.PowerWindows,
      RadioRemoteControl: data.RadioRemoteControl,
      CupHolders: data.CupHolders,
      HeighAdjustment: data.HeighAdjustment,
      ReverseCamera: data.ReverseCamera,
      Airbags: data.Airbags,
      Images: data.Images,
      IsActive: data.IsActive,
    });

    return res.status(201).json(newCar);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Erro ao criar veículo.');
  }
};

export const getVehicles = async (req: Request, res: Response) => {
  const vehicles = await Vehicle.findAll();
  res.json(vehicles);
};

export const GetVehicleById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const vehicleExists = await Vehicle.findByPk(id);
  if (!vehicleExists) {
    return res.status(404).send("Veículo não encontrado");
  }
  return res.status(200).json(vehicleExists);
};

export const RemoveVehicle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const vehicle = await Vehicle.findByPk(id);

    if (!vehicle) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }

    await vehicle.destroy();

    return res.status(200).json({ message: 'Veículo deletado com sucesso' });
  } catch (error) {
    next(error);
  }
};

export const updateVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const vehicle = await Vehicle.findByPk(id);

    if (!vehicle) {
      return res.status(404).send('Veículo não encontrado!');
    }

    const updatedFields: any = {};
    for (const key in req.body) {
      if (req.body[key] !== null && req.body[key] !== undefined) {
        updatedFields[key] = req.body[key];
      }
    }

    await vehicle.update(updatedFields);

    return res.status(200).send("veículo atualizado com sucesso");
  } catch (error) {
    console.error('Erro ao atualizar veículo:', error);
    return res.status(500).send('Erro ao atualizar');
  }
};
