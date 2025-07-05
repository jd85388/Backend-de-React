import { Router } from 'express';
import {
  registrarCitaOdontologia,
  obtenerCitasOdontologia
} from '../controllers/odontologia.controller';

const router = Router();

// Registrar nueva cita odontológica
router.post('/registrar', registrarCitaOdontologia);

// Obtener citas odontológicas por paciente
router.get('/:pacienteId', obtenerCitasOdontologia);

export default router;
