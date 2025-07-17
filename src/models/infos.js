const Sequelize = require('sequelize');
const database = require('../config/db');

const info = database.define('infoTb', {
    IDInfo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Description:{
        type: Sequelize.STRING,
        allowNull: true
    },
    CNPJ:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Contact: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Logo: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = info;