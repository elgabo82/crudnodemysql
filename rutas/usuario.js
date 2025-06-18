// rutas/usuario.js

const express = require('express');
const rutas = express.Router();
const Usuario = require('../modelos/modeloUsuario.js');

// GET - Todos los usuarios
rutas.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los usuarios");
    }
});

// GET - Usuario por ID
rutas.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al buscar el usuario");
    }
});

// POST - Crear usuario
rutas.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).send("Error al crear usuario");
    }
});

// PUT - Actualizar usuario
rutas.put('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            await usuario.update(req.body);
            res.send("Usuario actualizado");
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al actualizar usuario");
    }
});

// DELETE - Eliminar usuario
rutas.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            await usuario.destroy();
            res.send("Usuario eliminado");
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al eliminar usuario");
    }
});

module.exports = rutas;

