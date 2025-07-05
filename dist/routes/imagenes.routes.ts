// src/routes/imagenes.routes.ts
import { Router } from 'express';
import {
  subirImagenDiagnostica,
  obtenerImagenesDiagnosticas
} from '../controllers/imagenes.controller';

const router = Router();

router.post('/crear', subirImagenDiagnostica);
router.get('/:pacienteId', obtenerImagenesDiagnosticas);

export default router;
