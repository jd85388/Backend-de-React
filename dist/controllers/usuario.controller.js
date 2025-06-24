"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarUsuario = exports.loginUsuario = void 0;
const usuario_services_1 = require("../services/usuario.services");
const loginUsuario = async (req, res) => {
    try {
        const { correo, password } = req.body;
        if (!correo || !password) {
            return res.status(400).json({ message: "Correo y Contraseña son requeridos" });
        }
        const resultado = await (0, usuario_services_1.loginUsuarioService)(correo, password);
        if (resultado) {
            res.status(200).json({ message: "Bienvenido a Life Reminder", data: resultado });
        }
        else {
            res.status(401).json({ message: "Correo u contraseña incorrectos" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Tenemos un problema para conectar con el servidor", error: error.message });
    }
};
exports.loginUsuario = loginUsuario;
const registrarUsuario = async (req, res) => {
    try {
        const { nombre, apellido, rh, fechaNacimiento, telefono, correo, password } = req.body;
        if (!nombre || !apellido || !rh || !fechaNacimiento || !telefono || !correo || !password) {
            return res.status(400).json({ message: "Todos los campos son requeridos" });
        }
        const resultado = await (0, usuario_services_1.registrarUsuarioService)(nombre, apellido, rh, fechaNacimiento, telefono, correo, password);
        res.status(201).json({ message: "El usuario fue registrado", data: resultado });
    }
    catch (error) {
        res.status(500).json({ message: "Perdimos la conexion con el servidor", error: error.message });
    }
};
exports.registrarUsuario = registrarUsuario;
