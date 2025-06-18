// Archivo de rutas del API de usuario

const express = require('express');
const rutas = express.Router();
const conectar = require('../config/db');


//Conexión Asíncrona
(async ()=> {
    try {
        const conexion = await conectar.getConnection();
        console.log("Conectado a la Base de Datos");
    } catch (error) {
        console.log("Ocurrió un error al conectar.");
    }
})();




rutas.get('/usuarios', async (req, res)=> {
    try {
        const datos = await conexion.promise().query(
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