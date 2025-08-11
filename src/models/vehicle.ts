import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { ETransmision, ETraction, ESteering, EFuelType, EBrand } from "../enums/enums";
import Category from "./category";

class Vehicle extends Model {
  IDVehicle!: number;
  Brand!: string;
  Model!: string;
  Version!: string;
  Year!: number;
  Plate!: string;
  Renavam!: string;
  Chassi!: string;
  Engine!: string;
  Mileage!: number;
  Transmission!: ETransmision;
  HorsePower!: string;
  Traction!: ETraction;
  Steering!: ESteering;
  Doors!: number;
  FuelType!: EFuelType;
  Category!: number;
  Color!: string;
  Capacity!: number;
  CruiseControl!: number;
  AirConditioning!: number;
  OnBoardComputer!: number;
  PowerWindows!: number;
  RadioRemoteControl!: number;
  Radio!: number;
  CupHolders!: number;
  HeighAdjustment!: number;
  ReverseCamera!: number;
  Airbags!: number;
  Alarm!: number;
  Images!: string[];
  IsActive!: number;
}


Vehicle.init({
    IDVehicle: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    }, Brand: {
        type: DataTypes.ENUM(...Object.values(EBrand)),
        allowNull: false

    }, Model: {
        type: DataTypes.STRING,
        allowNull: false

    }, Version: {
        type: DataTypes.STRING,
        allowNull: true

    }, Year: {
        type: DataTypes.INTEGER,
        allowNull: false

    }, Plate: {
        type: DataTypes.STRING,
        allowNull: false

    }, Renavam: {
        type: DataTypes.STRING,
        allowNull: true

    }, Chassi: {
        type: DataTypes.STRING,
        allowNull: true

    }, Engine: {
        type: DataTypes.STRING,
        allowNull: false

    }, Mileage: {
        type: DataTypes.FLOAT,
        allowNull: false

    }, Transmission: {
        type: DataTypes.ENUM(...Object.values(ETransmision)),
        allowNull: false

    }, HorsePower: {
        type: DataTypes.STRING,
        allowNull: true

    }, Traction: {
        type: DataTypes.ENUM(
            'Dianteira',
            'Traseira',
            '4x4'
        ),
        allowNull: true

    }, Steering: {
        type: DataTypes.ENUM(...Object.values(ESteering)),
        allowNull: true
    }, Doors: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, FuelType: {
        type: DataTypes.ENUM(...Object.values(EFuelType)),
        allowNull: false

    }, Category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categoryTb',
            key: 'IDCategory'
  },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'

    }, Color: {
        type: DataTypes.STRING,
        allowNull: true

    }, Capacity: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, CruiseControl: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, AirConditioning: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, OnBoardComputer: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, PowerWindows: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, RadioRemoteControl: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, CupHolders: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, Alarm: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, HeighAdjustment: {
        type: DataTypes.INTEGER,
        allowNull: true

    },ReverseCamera: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, Radio: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Airbags: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, Description: {
        type: DataTypes.INTEGER,
        allowNull: true

    }, Images: {
        type: DataTypes.JSON,
        allowNull: true

    }, IsActive: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
  sequelize,
  tableName: 'vehicleTb',
  timestamps: true,
});

Vehicle.belongsTo(Category, {
  foreignKey: 'Category',
  as: 'category',  //nome col
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Category.hasMany(Vehicle, {
  foreignKey: 'Category', // tem que ser igual ao que está na tabela Vehicle
});

export default Vehicle;