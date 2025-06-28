"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarUsuarioService = exports.loginUsuarioService = void 0;
const mssql_1 = __importDefault(require("mssql"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../config/config");
const loginUsuarioService = async (correo, password) => {
    try {
        const pool = await mssql_1.default.connect(config_1.dbConfig);
        const result = await pool.request()
            .input('correo', mssql_1.default.VarChar, correo)
            .input('password', mssql_1.default.VarChar, password)
            .query('SELECT * FROM paciente WHERE correo = @correo');
        const usuario = result.recordset[0];
        if (!usuario) {
            return null;
        }
        const match = await bcrypt_1.default.compare(password, usuario.password);
        if (!match) {
            return null;
        }
        return usuario;
    }
    catch (error) {
        throw error;
    }
};
exports.loginUsuarioService = loginUsuarioService;
const registrarUsuarioService = async (nombre, apellido, rh, fechaNacimiento, telefono, correo, password) => {
    try {
        const pool = await mssql_1.default.connect(config_1.dbConfig);
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const result = await pool.request()
            .input('nombre', mssql_1.default.VarChar, nombre)
            .input('apellido', mssql_1.default.VarChar, apellido)
            .input('rh', mssql_1.default.VarChar, rh)
            .input('fechaNacimiento', mssql_1.default.Date, fechaNacimiento)
            .input('telefono', mssql_1.default.BigInt, telefono)
            .input('correo', mssql_1.default.VarChar, correo)
            .input('password', mssql_1.default.VarChar, hashedPassword)
            .query('INSERT INTO Paciente (nombre, apellido, rh, fechaNacimiento, telefono, correo, password) VALUES (@nombre, @apellido, @rh, @fechaNacimiento, @telefono, @correo, @password)');
        return result;
    }
    catch (error) {
        throw error;
    }
};
exports.registrarUsuarioService = registrarUsuarioService;
