import { CreateVehicleDto } from "../dto/vehicleDto"
import { Request} from 'express';
import Vehicle from "../models/vehicle";
import { LogService } from "./logService";

export const createVehicle = async (req: Request) => {
    const data: CreateVehicleDto = { ...req.body };
    const newVehicle = await Vehicle.create({
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

    LogService.createLog({
        Description: `Novo veículo ${newVehicle.get('Model')} adicionado`,
        Date: new Date()
    });

    return newVehicle
};

export const getVehicles = async () => {
  return await Vehicle.findAll();
};

export const getVehicleById = async (req: Request) => {
  const id = await req.params.id;
  const vehicleExists = await Vehicle.findByPk(id);
  return vehicleExists
};

export const removeVehicle = async (req: Request) => {
    const id = await req.params.id;
    const vehicle = await Vehicle.findByPk(id);
    if(!vehicle){
      return new Error("Veículo não encontrado ")
    }
    await vehicle.destroy();
    LogService.createLog({
        Description: `Veículo ${vehicle.get('Model')} excluído`,
        Date: new Date()
    });
};

export const updateVehicle = async (req: Request) => {
    const id = req.params.id;
    const vehicle = await Vehicle.findByPk(id);
    const updatedFields: any = {};
    for (const key in req.body) {
      if (req.body[key] !== null && req.body[key] !== undefined) {
        updatedFields[key] = req.body[key];
      }
    }
    if (!vehicle) {
      return new Error("Veículo não encontrado");
    }
    await vehicle.update(updatedFields);

    LogService.createLog({
        Description: `Veículo ${vehicle.get('Model')} atualizado`,
        Date: new Date()
    });
};
