"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarUsuario = void 0;
const mssql_1 = __importDefault(require("mssql"));
const config_1 = require("../config/config");
const registrarUsuario = async (nuevoUsuario) => {
    const pool = await mssql_1.default.connect(config_1.dbConfig);
    await pool.request()
        .input('nombre', mssql_1.default.VarChar, nuevoUsuario.nombre)
        .input('apellido', mssql_1.default.VarChar, nuevoUsuario.apellido)
        .input('fechaNacimiento', mssql_1.default.Date, nuevoUsuario.fechaNacimiento)
        .input('rh', mssql_1.default.VarChar, nuevoUsuario.rh)
        .input('telefono', mssql_1.default.BigInt, nuevoUsuario.telefono)
        .input('correo', mssql_1.default.VarChar, nuevoUsuario.correo)
        .input('password', mssql_1.default.VarChar, nuevoUsuario.password)
        .query('INSERT INTO paciente (nombre, apellido, fechaNacimiento, rh, telefono, correo, password) VALUES (@nombre, @apellido, @fechaNacimiento, @rh, @telefono, @correo, @password)');
};
exports.registrarUsuario = registrarUsuario;
