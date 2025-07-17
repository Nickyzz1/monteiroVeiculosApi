const Sequelize = require('sequelize');
const database = require('../config/db');

const category = database.define('categoryTb', {
    IDCategory: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    IsActive: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = category;