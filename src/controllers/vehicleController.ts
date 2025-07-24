
import { Request, Response, NextFunction } from 'express';
import { createVehicle, getVehicleById, getVehicles, removeVehicle, updateVehicle } from "../services/vehicleService";

export const CreateVehicle = async (req: Request, res: Response) => {
  try {
    const newVehicle = await createVehicle(req)
    return res.status(201).json(newVehicle);
  } catch (err) {
    console.error('Erro ao criar veículo:', err);
    return res.status(500).send('Erro ao criar veículo.');
  }
};

export const GetVehicles = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(await getVehicles());
  } catch (err) {
    console.error('Erro ao buscar veículoss:', err);
    return res.status(500).send('Erro ao criar veículo.');
  }
};

export const GetVehicleById = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const vehicleExists = await getVehicleById(req)
    return res.status(200).json(vehicleExists);
  } catch (err) {
    console.error('Erro ao buscar veículo por ID:', err);
    return res.status(500).send('Erro ao criar veículo.');
  }
};

export const RemoveVehicle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await removeVehicle(req)
    return res.status(200).json({ message: 'Veículo deletado com sucesso' });
  } catch (err) {
    console.error('Erro ao deletar veículo:', err);
    return res.status(500).send('Erro ao criar veículo.');
  }
};

export const UpdateVehicle = async (req: Request, res: Response) => {
  try {
    await updateVehicle(req)
    return res.status(200).send("veículo atualizado com sucesso");
  } catch (error) {
    console.error('Erro ao atualizar veículo:', error);
    return res.status(500).send('Erro ao atualizar');
  }
};
