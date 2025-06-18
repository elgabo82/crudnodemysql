/*
CRUD Básico NodeJS MySQL Express
*/

const express = require('express');
const conectarDB = require('./bd');

const app = express();

const SRV_PUERTO = 5000;

conectarDB();

app.listen(SRV_PUERTO, ()=>{
    console.log(`Servidor funcionando en el puerto ${SRV_PUERTO}`);
})





