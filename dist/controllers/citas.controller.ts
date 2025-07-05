// src/controllers/citas.controller.ts
import { Request, Response } from 'express';
import {
  registrarCitaMedicaService,
  obtenerCitasMedicasService
} from '../services/cita.services';

export const registrarCitaMedica = async (req: Request, res: Response) => {
  try {
    const datos = req.body;
    const resultado = await registrarCitaMedicaService(datos);
    res.status(201).json({ mensaje: 'Cita médica registrada exitosamente', resultado });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar la cita médica', detalle: error });
  }
};

export const obtenerCitasMedicas = async (req: Request, res: Response) => {
  try {
    const pacienteId = parseInt(req.params.pacienteId);
    const citas = await obtenerCitasMedicasService(pacienteId);
    res.status(200).json(citas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las citas médicas', detalle: error });
  }
};
