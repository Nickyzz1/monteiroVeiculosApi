const Sequelize = require('sequelize');
const database = require('../config/db');

const user = database.define('UserTb', {
    IDUser: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    IsAdmin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = users;