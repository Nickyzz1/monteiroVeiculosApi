import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/database";

// NÃO declare campos públicos aqui, deixe o Sequelize gerenciar
class User extends Model {}

User.init({
  IDUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: { type: DataTypes.STRING, allowNull: false },
  Email: { type: DataTypes.STRING, allowNull: false },
  Password: { type: DataTypes.STRING, allowNull: false },
  IsAdmin: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
}, {
  sequelize,
  tableName: 'UserTb',
  timestamps: true,
});

export default User;
