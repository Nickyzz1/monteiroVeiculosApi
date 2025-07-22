// import  Vehicle from '../models/vehicle'
// import { CreateVehicleDto } from '../dto/vehicleDto';
// import { AppError } from '../error/AppError';
// const { Op } = require('sequelize');

// export class vehicle {

//   public async createVehicle(data : CreateVehicleDto) {
//     if(!data) {
//       throw new AppError('Dados faltantes, por favor prencha todos os dados', 400);
//     }
   
//   const existingCar = await Vehicle.findOne({ 
//     where: {
//       [Op.or]: [
//         { renavam: data.Renavam }, 
//         { chassi: data.Chassi }, 
//         { plate: data.Plate } 
//       ]
//     }
//   });

//   if (existingCar) {
//     throw new AppError('Chassi, renavam ou placa já cadastrada.', 409);
//   }

//     // return await Vehicle.create(data);
//   }
  
//   public async getVehicles() {
//     return await Vehicle.findAll();
//   }
  
//   public async updateVehicle(id : number, data: any) {
//     const vehicle = await Vehicle.findByPk(id);
//     if (!vehicle) return null;
//     return await vehicle.update(data);
//   }
// }
