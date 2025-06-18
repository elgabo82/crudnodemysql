/*
CRUD Básico NodeJS MySQL Express
*/

/*const express = require('express');

const app = express();
const SRV_PUERTO = 5000;

app.use(express.json());
app.use('/api/v1', require('./rutas/usuario'));

app.get('/', (req, res)=>{
    res.send('Hola Mi primera API, intentando entender al profe.')
});


app.listen(SRV_PUERTO, ()=>{
    console.log(`Servidor funcionando en el puerto ${SRV_PUERTO}`);
})*/

// index.js

const express = require('express');
const app = express();
const sequelize = require('./config/sequelize');
const Usuario = require('./modelos/modeloUsuario'); // Importa el modelo para sincronizar
const SRV_PUERTO = 5000;

app.use(express.json());
app.use('/api/v1', require('./rutas/usuario'));

app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Conexión a la base de datos exitosa");

        // Crear tabla si no existe
        await Usuario.sync({ alter: true }); // alter: actualiza si es necesario
        console.log("✅ Tabla 'usuarios' verificada o creada correctamente");

        // Inicia el servidor
        app.listen(SRV_PUERTO, () => {
            console.log(`🚀 Servidor funcionando en el puerto ${SRV_PUERTO}`);
        });
    } catch (err) {
        console.error("❌ Error al iniciar la aplicación:", err);
    }
})();






