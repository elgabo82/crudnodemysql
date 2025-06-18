// config/sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dsi', 'crud', 'Crud.2024', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

