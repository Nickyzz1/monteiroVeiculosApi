import { CreateVehicleDto } from "../dto/vehicleDto"
import { Request} from 'express';
import Vehicle from "../models/vehicle";

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
    await vehicle.destroy();
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
    await vehicle.update(updatedFields);
};
