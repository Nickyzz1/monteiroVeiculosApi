const Sequelize = require('sequelize');
const database = require('../config/db');

const log = database.define('logTb', {
    IDLog: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Date: {
        type: Sequelize.DATETIME,
        allowNull: false
    },
});

module.exports = log;