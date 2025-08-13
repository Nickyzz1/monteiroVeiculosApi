import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/database";

class Category extends Model {
  IDCategory!: number;
  Title!: string;
  Image!: string | null;
  IsActive!: boolean;
}

Category.init({
  IDCategory: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Title:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  IsActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  sequelize,
  tableName: 'categoryTb',
  timestamps: true,
});

export default Category;
