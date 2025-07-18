// Archivo de rutas del API de usuario

const express = require('express');
const rutas = express.Router();
const conectar = require('../config/db');

conectar;

rutas.get('/usuarios', async (req, res)=> {
    try {
        const datos = await conectar.promise().query(
            `SELECT * from usuarios;`
        );
        res.status(200).json({
            usuarios: data[0],
        });

    } catch (error) {
        res.status(500).json({
            msg: error,
        })
    }
})


module.exports = rutas;