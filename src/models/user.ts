import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/database"

class User extends Model {
  IDUser!: number;
  Name!: string;
  Email!: string;
  Password!: string;
  IsAdmin!: boolean;
}

User.init({
  IDUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IsAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
}, {
  sequelize,
  tableName: 'UserTb',
  timestamps: true,
});

export default User;
