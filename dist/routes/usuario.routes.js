"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const Rutas = (0, express_1.Router)();
Rutas.post('/login', usuario_controller_1.loginUsuario);
Rutas.post('/registro', usuario_controller_1.registrarUsuario);
exports.default = Rutas;
