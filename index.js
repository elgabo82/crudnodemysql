/*
CRUD Básico NodeJS MySQL Express
*/

const express = require('express');

const app = express();
const SRV_PUERTO = 5000;

app.use(express.json());
app.use('/api/v1', require('./rutas/usuario'));

app.get('/', (req, res)=>{
    res.send('Hola Mi primera API, intentando entender al profe.')
});


app.listen(SRV_PUERTO, ()=>{
    console.log(`Servidor funcionando en el puerto ${SRV_PUERTO}`);
})





