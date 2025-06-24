import { Router } from 'express';
import { loginUsuario, registrarUsuario } from '../controllers/usuario.controller';

const Rutas = Router();

Rutas.post('/login', loginUsuario);
Rutas.post('/registro', registrarUsuario);

export default Rutas;