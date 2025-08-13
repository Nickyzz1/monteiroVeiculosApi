import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/database";

class Info extends Model {
  IDInfo!: number;
  CNPJ!: string | null;
  Contact!: string | null;
  Logo!: string | null;
  volkswagen!: number;
  chevrolet!: number;
  fiat!: number;
  ford!: number;
  toyota!: number;
  honda!: number;
  hyundai!: number;
  renault!: number;
  peugeot!: number;
  citroen!: number;
  nissan!: number;
  jeep!: number;
  kia!: number;
  mitsubishi!: number;
  mercedes_benz!: number;
  bmw!: number;
  audi!: number;
  volvo!: number;
  land_rover!: number;
  jac!: number;
  jaguar!: number;
  lexus!: number;
  chery!: number;
  byd!: number;
  outro!: number;
}

Info.init({
  IDInfo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  CNPJ: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Contact: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Logo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  volkswagen: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  chevrolet: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  fiat: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  ford: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  toyota: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  honda: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  hyundai: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  renault: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  peugeot: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  citroen: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  nissan: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  jeep: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  kia: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  mitsubishi: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  mercedes_benz: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  bmw: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  audi: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  volvo: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  land_rover: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  jac: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  jaguar: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  lexus: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  chery: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  byd: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  outro: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
}, {
  sequelize,
  tableName: 'infoTb',
  timestamps: false,
});

export default Info;
