// src/controllers/imagenes.controller.ts
import { Request, Response } from 'express';
import {
  subirImagenDiagnosticaService,
  obtenerImagenesPorPacienteService
} from '../services/imagenesDiagnosticas.services';

export const subirImagenDiagnostica = async (req: Request, res: Response) => {
  try {
    const datos = req.body;
    const resultado = await subirImagenDiagnosticaService(datos);
    res.status(201).json({ mensaje: 'Imagen diagnóstica registrada', resultado });
  } catch (error) {
    res.status(500).json({ error: 'Error al subir la imagen diagnóstica', detalle: error });
  }
};

export const obtenerImagenesDiagnosticas = async (req: Request, res: Response) => {
  try {
    const pacienteId = parseInt(req.params.pacienteId);
    const imagenes = await obtenerImagenesPorPacienteService(pacienteId);
    res.status(200).json(imagenes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las imágenes', detalle: error });
  }
};
