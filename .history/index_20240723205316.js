/*
CRUD Básico NodeJS MySQL Express
*/

const express = require('express');

const app = express();

const SRV_PUERTO = 5000;

console.log("Prueba nueva");

app.listen(SRV_PUERTO, ()=>{
    console.log(`Servidor funcionando en el puerto ${SRV_PUERTO}`);
})





