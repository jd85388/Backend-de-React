"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroCitas = void 0;
const registros_service_1 = require("../services/registros.service");
const registroCitas = async (req, res) => {
    try {
        const { id_paciente, clinica, lugar, consultorio, especialidad, fecha } = req.body;
        const resultado = await (0, registros_service_1.registrarCitaService)(id_paciente, clinica, lugar, consultorio, especialidad, fecha);
        res.status(201).json({ message: "Se registro la cita con exito" });
    }
    catch (error) {
        throw error;
    }
};
exports.registroCitas = registroCitas;
