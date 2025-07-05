// src/controllers/historiaClinica.controller.ts
import { Request, Response } from 'express';
import {
  crearHistoriaClinicaService,
  obtenerHistoriaClinicaService
} from '../services/historiaClinica.services';

export const crearHistoriaClinica = async (req: Request, res: Response) => {
  try {
    const datos = req.body;
    const resultado = await crearHistoriaClinicaService(datos);
    res.status(201).json({ mensaje: 'Historia clínica registrada', resultado });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar la historia clínica', detalle: error });
  }
};

export const obtenerHistoriaClinica = async (req: Request, res: Response) => {
  try {
    const pacienteId = parseInt(req.params.pacienteId);
    const historia = await obtenerHistoriaClinicaService(pacienteId);
    res.status(200).json(historia);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la historia clínica', detalle: error });
  }
};
