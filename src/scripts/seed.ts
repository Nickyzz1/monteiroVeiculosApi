const dbConnection = require('../../config/db.ts');
const VehicleVar = require('../models/vehicle')

const vehicles = [
  {
    Brand: 'Jeep',
    Model: 'Commander',
    Version: '2.0 TD380 Turbo Diesel Overland AT9',
    Year: 2022,
    Plate: 'XXX6',
    Renavam: null,
    Chassi: null,
    Engine: '2.0 TD380',
    Mileage: 53206,
    Transmission: 'automático',
    HorsePower: null,
    Traction: '4x4',
    Steering: null,
    Doors: 4,
    FuelType: 'diesel',
    Category: 4,
    Color: 'cinza',
    Capacity: 5,
    CruiseControl: 1,
    AirConditioning: 1,
    OnBoardComputer: 1,
    PowerWindows: 1,
    RadioRemoteControl: 0,
    CupHolders: 1,
    HeighAdjustment: 1,
    ReverseCamera: 1,
    Airbags: 1,
    Images: [],
    IsActive: 1
  },
  {
    Brand: 'Toyota',
    Model: 'Corolla',
    Version: '2.0 VVT-IE FLEX GR-S DIRECT SHIFT',
    Year: 2025,
    Plate: 'XXX7',
    Renavam: null,
    Chassi: null,
    Engine: '2.0 VVT-IE',
    Mileage: 1920,
    Transmission: 'automático',
    HorsePower: null,
    Traction: null,
    Steering: null,
    Doors: 4,
    FuelType: 'flex',
    Category: 2,
    Color: 'branco',
    Capacity: 5,
    CruiseControl: 1,
    AirConditioning: 1,
    OnBoardComputer: 1,
    PowerWindows: 1,
    RadioRemoteControl: 0,
    CupHolders: 1,
    HeighAdjustment: 1,
    ReverseCamera: 1,
    Airbags: 1,
    Images: [],
    IsActive: 1
  },
  {
    Brand: 'Toyota',
    Model: 'Hilux',
    Version: '2.8 D-4D TURBO DIESEL CD SRX LIMITED 4X4 AUTOMÁTICO',
    Year: 2023,
    Plate: 'XXX0',
    Renavam: null,
    Chassi: null,
    Engine: '2.8 D-4D',
    Mileage: 18000,
    Transmission: 'automático',
    HorsePower: null,
    Traction: '4x4',
    Steering: null,
    Doors: 4,
    FuelType: 'diesel',
    Category: 5,
    Color: 'branco',
    Capacity: 5,
    CruiseControl: 1,
    AirConditioning: 1,
    OnBoardComputer: 1,
    PowerWindows: 1,
    RadioRemoteControl: 0,
    CupHolders: 1,
    HeighAdjustment: 1,
    ReverseCamera: 1,
    Airbags: 1,
    Images: [],
    IsActive: 1
  },
  {
    Brand: 'Volkswagen',
    Model: 'Fox',
    Version: '1.6 MSI TOTAL FLEX CONNECT 4P MANUAL',
    Year: 2018,
    Plate: 'XXX8',
    Renavam: null,
    Chassi: null,
    Engine: '1.6 MSI',
    Mileage: 46000,
    Transmission: 'manual',
    HorsePower: null,
    Traction: null,
    Steering: null,
    Doors: 4,
    FuelType: 'flex',
    Category: 3,
    Color: 'vermelho',
    Capacity: 5,
    CruiseControl: 0,
    AirConditioning: 1,
    OnBoardComputer: 0,
    PowerWindows: 1,
    RadioRemoteControl: 0,
    CupHolders: 1,
    HeighAdjustment: 1,
    ReverseCamera: 0,
    Airbags: 1,
    Images: [],
    IsActive: 1
  }
];

async function seed() {
  try {
    await dbConnection.sync();
    await VehicleVar.bulkCreate(vehicles);
    console.log('Veículos inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir veículos:', error);
  } finally {
    await dbConnection.close();
  }
}

seed();
