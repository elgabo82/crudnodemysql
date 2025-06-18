// Archivo de rutas del API de usuario

const express = require('express');
const rutas = express.Router();
const conectar = require('../config/db');


//conectar;

mysql.createConnection
rutas.get('/usuarios', async (req, res)=> {
    try {
        const datos = await conectar.promise().query(
            `SELECT * from usuarios;`
        );
        console.log(datos);
        res.json(datos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
})


module.exports = rutas;