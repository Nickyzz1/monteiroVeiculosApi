import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/database"

const log = sequelize.define('logTb', {
    IDLog: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Date: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

export default log;