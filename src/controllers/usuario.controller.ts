import { Request, Response} from 'express';
import { loginUsuarioService, registrarUsuarioService } from '../services/usuario.services';

export const loginUsuario  = async (req: Request, res: Response) => {
    try{
        const { correo, password } = req.body;

        if (!correo || !password) {
            return res.status(400).json({message: "Correo y Contraseña son requeridos"});
        }

        const resultado = await loginUsuarioService(correo, password);
        if (resultado) {
            res.status(200).json({message: "Bienvenido a Life Reminder", data: resultado});
        } else {
            res.status(401).json({message: "Correo u contraseña incorrectos"});
        }
    } catch (error) {
        res.status(500).json({message: "Tenemos un problema para conectar con el servidor", error: (error as Error).message});
    }
};

export const registrarUsuario = async (req: Request, res: Response) => {
    try{
        const { nombre, apellido, rh, telefono, correo, password} = req.body;
         if (!nombre || !apellido || !rh || !telefono || !correo || !password) {
            res.status(400).json({message: "Todos los campos son requeridos"});
         }

         const resultado = await registrarUsuarioService(nombre, apellido, rh, telefono, correo, password);
         res.status(201).json({message: "El usuario fue registrado",data: resultado});
    } catch (error) {
        res.status(500).json({message: "Perdimos la conexion con el servidor", error: (error as Error).message});
    }
};