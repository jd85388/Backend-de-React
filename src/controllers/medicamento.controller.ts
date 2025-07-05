// src/controllers/medicamento.controller.ts
import { Request, Response } from 'express';
import {
  obtenerMedicamentosService,
  registrarMedicamentoService
} from '../services/medicamento.services';

export const obtenerMedicamentos = async (req: Request, res: Response) => {
  const { pacienteId } = req.params;

  try {
    const medicamentos = await obtenerMedicamentosService(parseInt(pacienteId));
    res.status(200).json(medicamentos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener medicamentos', error });
  }
};

export const registrarMedicamento = async (req: Request, res: Response) => {
  const { pacienteId, nombre, descripcion, frecuencia, hora } = req.body;

  if (!pacienteId || !nombre || !frecuencia || !hora) {
    return res.status(400).json({ mensaje: 'Faltan datos requeridos' });
  }

  try {
    const resultado = await registrarMedicamentoService(
      pacienteId,
      nombre,
      descripcion || '',
      frecuencia,
      hora
    );
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar medicamento', error });
  }
};
