"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarCitaService = void 0;
const mssql_1 = __importDefault(require("mssql"));
const config_1 = require("../config/config");
const registrarCitaService = async (idPaciente, clinica, lugar, consultorio, especialidad, fecha) => {
    try {
        if (!idPaciente || !clinica || !lugar || !consultorio || !especialidad || !fecha) {
            throw new Error("Faltan valores");
        }
        const pool = await mssql_1.default.connect(config_1.dbConfig);
        const resultado = await pool.request()
            .input('idPaciente', mssql_1.default.Int, idPaciente)
            .input('clinica', mssql_1.default.NVarChar, clinica)
            .input('lugar', mssql_1.default.NVarChar, lugar)
            .input('consultorio', mssql_1.default.NVarChar, consultorio)
            .input('especialidad', mssql_1.default.NVarChar, especialidad)
            .input('fecha', mssql_1.default.Date, fecha)
            .query('INSERT INTO CitaMedica (idPaciente, clinica, lugar, consultorio, especialidad, fecha) VALUES (@idPaciente, @clinica, @lugar, @consultorio, @especialidad, @fecha)');
    }
    catch (error) {
        throw error;
    }
};
exports.registrarCitaService = registrarCitaService;
