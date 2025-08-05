import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/database"

class Category extends Model {
    IDCatgeory!: number
    Title!:string
    Image!:string
    IsActive!:number
}
Category.init({
    IDCategory: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    IsActive: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
    tableName: 'categoryTb', 
    timestamps: true
});


export default Category;
