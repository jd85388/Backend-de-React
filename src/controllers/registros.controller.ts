import { Request, Response } from "express";
import { registrarCitaService } from "../services/registros.service";

export const registroCitas = async( req: Request, res: Response ) => {
    try{
        const {id_paciente,
               clinica,
               lugar,
               consultorio,
               especialidad,
               fecha 
        } = req.body

        const resultado = await registrarCitaService(id_paciente, clinica, lugar, consultorio, especialidad, fecha);
            res.status(201).json({message:"Se registro la cita con exito"});       
        }catch (error : any){         
            throw error;
        }
    }