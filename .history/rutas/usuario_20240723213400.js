// Archivo de rutas del API de usuario

const express = require('express');
const rutas = express.Router();
//const conectar = require('../config/db');

const mysql = require('mysql')

const HOST = "localhost";
const USUARIO = "crud";
const CLAVE = "Crud.2024";
const DB = "dsi";



const conectar = mysql.createPool({
    host: HOST,
    user: USUARIO,
    password: CLAVE,
    database: DB
});

//conectar;

rutas.get('/usuarios', async (req, res)=> {
    try {
        const datos = await conectar.promise().query(
            `SELECT * from usuarios;`
        );
        res.status(200).json({datos});

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
})


module.exports = rutas;