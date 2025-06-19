import { Router } from 'express';
import { loginUsuario } from '../controllers/usuario.controllers.ts';

const router = Router();

router.post('/login', loginUsuario);
router.post('/registro', registrarUsuario);

export default router;