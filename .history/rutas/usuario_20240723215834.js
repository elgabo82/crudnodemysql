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


// GET - Lectura | Read
rutas.get('/usuarios', async (req, res)=> {
    try {
        const datos = await conectar.query(
            `SELECT * from usuarios;`
        );
        console.log(datos);
        res.json(datos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
});

rutas.get('/usuarios/:id', (req, res)=>{
    const id = req.params.id;

    conectar.query('SELECT * FROM usuarios WHERE id_usuario = ', id, (error, resultados) =>{
        if (error) {
            console.log('Error al consultar los datos.');
            res.status(500).send('Ocurrió un error al consultar');
            return;
        } else {
            //res.send(resultados);
            res.json(resultados);
        }
    });
});


module.exports = rutas;