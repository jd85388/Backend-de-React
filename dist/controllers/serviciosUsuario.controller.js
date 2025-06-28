"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroCitas = void 0;
const usuarioServicios_service_1 = require("../services/usuarioServicios.service");
const registroCitas = async (req, res) => {
    try {
        const { id_paciente, clinica, lugar, consultorio, especialidad, fecha } = req.body;
        const resultado = await (0, usuarioServicios_service_1.registrarCitaService)(id_paciente, clinica, lugar, consultorio, especialidad, fecha);
        res.status(201).json({ message: "Se registro la cita con exito" });
    }
    catch (error) {
        return res.status(500).json({ message: `Perdimos conexion con la base de datos, porfavor verifica tu conexion a internet. Detalle: ${error.message}` });
    }
};
exports.registroCitas = registroCitas;
