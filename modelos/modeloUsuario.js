// models/usuario.model.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Usaremos una conexión con Sequelize

const Usuario = sequelize.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    clave: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;

