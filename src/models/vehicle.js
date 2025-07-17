const Sequelize = require('sequelize');
const database = require('../config/db');

const vehicle = database.define('VehicleTb', {
    IDVehicle: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    }, Brand: {
        type: Sequelize.STRING,
        allowNull: false

    }, Model: {
        type: Sequelize.STRING,
        allowNull: false

    }, Version: {
        type: Sequelize.STRING,
        allowNull: false

    }, Year: {
        type: Sequelize.INTEGER,
        allowNull: false

    }, Plate: {
        type: Sequelize.STRING,
        allowNull: false

    }, Renavam: {
        type: Sequelize.STRING,
        allowNull: true

    }, Chassi: {
        type: Sequelize.STRING,
        allowNull: true

    }, Engine: {
        type: Sequelize.STRING,
        allowNull: false

    }, Mileage: {
        type: Sequelize.FLOAT,
        allowNull: false

    }, Transmission: {
        type: Sequelize.ENUM(
        'manual',
        'automático',
        'automatizado',
        'cvt',
        'dct',
        'sequencial',
        'planetário',
        'hidrostático',
        'elétrico',
        'outro'
        ),
        allowNull: false

    }, HorsePower: {
        type: Sequelize.STRING,
        allowNull: true

    }, Traction: {
        type: Sequelize.ENUM(
            'Dianteira',
            'Traseira',
            '4x4'
        ),
        allowNull: true

    }, Steering: {
        type: Sequelize.ENUM('Hidráulica', 'Elétrica', 'Mecânica'),
        allowNull: true
    }, Doors: {
        type: Sequelize.INTEGER,
        allowNull: false

    }, FuelType: {
        type: Sequelize.ENUM(
        'gasoline',
        'ethanol',
        'flex',
        'diesel',
        'electric',
        'hybrid',
        'other'
    ),
        allowNull: false

    }, Category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'categoryTb',  
        key: 'id'             
    },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'

    }, Color: {
        type: Sequelize.STRING,
        allowNull: false

    }, Capacity: {
        type: Sequelize.INTEGER,
        allowNull: false

    }, CruiseControl: {
        type: Sequelize.INTEGER,
        allowNull: true

    }, AirConditioning: {
        type: Sequelize.INTEGER,
        allowNull: true

    }, OnBoardComputer: {
        type: Sequelize.INTEGER,
        allowNull: true

    }, PowerWindows: {
        type: Sequelize.INTEGER,
        allowNull: true

    }, RadioRemoteControl: {
        type: Sequelize.INTEGER,
        allowNull: true

    }, CupHolders: {
        type: Sequelize.INTEGER,
        allowNull: true

    }, HeighAdjustment: {
        type: Sequelize.INTEGER,
        allowNull: true

    },ReverseCamera: {
        type: Sequelize.INTEGER,
        allowNull: false

    }, Airbags: {
        type: Sequelize.INTEGER,
        allowNull: false

    }, Images: {
        type: Sequelize.JSON,
        allowNull: true

    }, IsActive: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = vehicle;