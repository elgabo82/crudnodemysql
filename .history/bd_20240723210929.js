const mysql = require('mysql');

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

module.exports = conectarDB;