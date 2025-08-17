import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Banner extends Model {
  IDBanner!: number;
  Image!: string;
  Order!: number;
  Type!: number;
  Local!:number;
}

Banner.init({
  IDBanner: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  Type: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Local: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // página inicial como padrão
  }
}, {
  sequelize,
  tableName: 'bannerTb',
  timestamps: true,
});

export default Banner;
