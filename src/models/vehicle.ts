import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Category from "./category";
import { ETransmision, ETraction, ESteering, EFuelType, EBrand } from "../enums/enums";

class Vehicle extends Model {
  IDVehicle!: number;
  Brand!: string;
  Model!: string;
  Version!: string | null;
  Year!: number;
  Plate!: string;
  Renavam!: string | null;
  Chassi!: string | null;
  Engine!: string;
  Mileage!: number;
  Transmission!: ETransmision;
  HorsePower!: string | null;
  Traction!: ETraction | null;
  Steering!: ESteering | null;
  Doors!: number | null;
  FuelType!: EFuelType;
  Category!: number;
  Color!: string | null;
  Capacity!: number | null;
  CruiseControl!: number | null;
  AirConditioning!: number | null;
  OnBoardComputer!: number | null;
  PowerWindows!: number | null;
  RadioRemoteControl!: number | null;
  Radio!: number | null;
  CupHolders!: number | null;
  HeighAdjustment!: number | null;
  ReverseCamera!: number | null;
  Airbags!: number | null;
  Alarm!: number | null;
  Description!: string | null;
  Images!: string[] | null;
  clicks!: number;
  IsActive!: boolean;
}

Vehicle.init({
  IDVehicle: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  Brand: { type: DataTypes.ENUM(...Object.values(EBrand)), allowNull: false },
  Model: { type: DataTypes.STRING, allowNull: false },
  Version: { type: DataTypes.STRING, allowNull: true },
  Year: { type: DataTypes.INTEGER, allowNull: false },
  Plate: { type: DataTypes.STRING, allowNull: false },
  Renavam: { type: DataTypes.STRING, allowNull: true },
  Chassi: { type: DataTypes.STRING, allowNull: true },
  Engine: { type: DataTypes.STRING, allowNull: false },
  Mileage: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
  Transmission: { type: DataTypes.ENUM(...Object.values(ETransmision)), allowNull: false },
  HorsePower: { type: DataTypes.STRING, allowNull: true },
  Traction: { type: DataTypes.ENUM(...Object.values(ETraction)), allowNull: true },
  Steering: { type: DataTypes.ENUM(...Object.values(ESteering)), allowNull: true },
  Doors: { type: DataTypes.INTEGER, allowNull: true },
  FuelType: { type: DataTypes.ENUM(...Object.values(EFuelType)), allowNull: false },
  Category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'categoryTb', key: 'IDCategory' },
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION',
  },
  Color: { type: DataTypes.STRING, allowNull: true },
  Capacity: { type: DataTypes.INTEGER, allowNull: true },
  CruiseControl: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  AirConditioning: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  OnBoardComputer: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  PowerWindows: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  RadioRemoteControl: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  CupHolders: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  Alarm: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  HeighAdjustment: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  ReverseCamera: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  Radio: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  Airbags: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  Description: { type: DataTypes.STRING(1000), allowNull: true },
  Images: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const raw = this.getDataValue('Images');
      return raw ? JSON.parse(raw) : null;
    },
    set(value: any) {
      this.setDataValue('Images', JSON.stringify(value));
    },
  },
  clicks: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  IsActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
}, {
  sequelize,
  tableName: 'vehicleTb',
  timestamps: true,
});

Vehicle.belongsTo(Category, { foreignKey: 'Category', as: 'category', onUpdate: 'CASCADE', onDelete: 'NO ACTION' });
Category.hasMany(Vehicle, { foreignKey: 'Category' });

export default Vehicle;
