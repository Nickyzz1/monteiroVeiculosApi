import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/database"

class User extends Model {
  // public IDUser!: number;
  // public Name!: string;
  // public Email!: string;
  // public Password!: string;
  // public IsAdmin!: number;
}

User.init({
  IDUser: {
    type: DataTypes.INTEGER.UNSIGNED,
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
    unique: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IsAdmin: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  }
}, {
  sequelize,
  tableName: 'UserTb',
  timestamps: true,
});

export default User;
