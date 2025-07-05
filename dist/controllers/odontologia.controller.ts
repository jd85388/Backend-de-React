import { Request, Response } from 'express';
import {
  registrarCitaOdontologiaService,
  obtenerCitasOdontologiaService
} from '../services/odontologia.services';

export const registrarCitaOdontologia = async (req: Request, res: Response) => {
  const { pacienteId, centroId, fecha, hora, especialistaId } = req.body;

  if (!pacienteId || !centroId || !fecha || !hora || !especialistaId) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  try {
    await registrarCitaOdontologiaService(
      pacienteId,
      centroId,
      fecha,
      hora,
      especialistaId
    );
    res.status(201).json({ message: 'Cita odontológica registrada con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar la cita odontológica.', error });
  }
};

export const obtenerCitasOdontologia = async (req: Request, res: Response) => {
  const { pacienteId } = req.params;

  try {
    const citas = await obtenerCitasOdontologiaService(Number(pacienteId));
    res.json(citas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las citas odontológicas.', error });
  }
};
