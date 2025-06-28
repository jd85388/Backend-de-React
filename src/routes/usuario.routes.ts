import { Router } from 'express';
import { loginUsuario, registrarUsuario } from '../controllers/usuario.controller';
import { registroCitas } from '../controllers/registros.controller';
const Rutas = Router();

Rutas.post('/login', loginUsuario);
Rutas.post('/registro', registrarUsuario);
//Rutas.post('/medicamento', registroMedicamento);
Rutas.post('/citas', registroCitas);

export default Rutas;