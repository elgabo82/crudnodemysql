/*
CRUD Básico NodeJS MySQL Express
*/

const express = require('express');
const conectarDB = require('./bd');

const app = express();

const SRV_PUERTO = 5000;


const HOST = "localhost";
const USUARIO = "crud";
const CLAVE = "Crud.2024";
const DB = "dsi";

const conectarDB = mysql.createPool({
    host: HOST,
    user: USUARIO,
    password: CLAVE,
    database: DB
});

app.listen(SRV_PUERTO, ()=>{
    console.log(`Servidor funcionando en el puerto ${SRV_PUERTO}`);
})





