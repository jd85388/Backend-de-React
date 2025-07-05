// src/routes/historiaClinica.routes.ts
import { Router } from 'express';
import {
  crearHistoriaClinica,
  obtenerHistoriaClinica
} from '../controllers/historiaClinica.controller';

const router = Router();

router.post('/crear', crearHistoriaClinica);
router.get('/:pacienteId', obtenerHistoriaClinica);

export default router;
