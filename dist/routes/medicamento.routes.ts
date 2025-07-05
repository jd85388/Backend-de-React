// src/routes/medicamento.routes.ts
import { Router } from 'express';
import {
  obtenerMedicamentos,
  registrarMedicamento
} from '../controllers/medicamento.controller';

const router = Router();

// Obtener medicamentos de un paciente
router.get('/:pacienteId', obtenerMedicamentos);

// Registrar nuevo medicamento
router.post('/', registrarMedicamento);

export default router;
