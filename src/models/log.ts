import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/database";

class Log extends Model {
  IDLog!: number;
  Description!: string;
  Date!: Date;
}

Log.init({
  IDLog: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  Description: { type: DataTypes.STRING, allowNull: false },
  Date: { type: DataTypes.DATE, allowNull: false },
}, {
  sequelize,
  tableName: 'logTb',
  timestamps: false,
});

export default Log;
