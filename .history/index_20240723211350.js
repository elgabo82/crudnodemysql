/*
CRUD Básico NodeJS MySQL Express
*/

const express = require('express');
const mysql = require('mysql');

const app = express();
const SRV_PUERTO = 5000;


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

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hola Mi primera API, intentando entender al profe.')
});


app.listen(SRV_PUERTO, ()=>{
    console.log(`Servidor funcionando en el puerto ${SRV_PUERTO}`);
})





