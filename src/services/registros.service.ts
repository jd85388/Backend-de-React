import sql from 'mssql';
import { dbConfig } from '../config/config';

export const registrarCitaService = async (
    idPaciente: number, 
    clinica: string, 
    lugar: string, 
    consultorio: string,
    especialidad: string,
    fecha: Date) => {
        try {
            if (!idPaciente || !clinica || !lugar || !consultorio || !especialidad || !fecha) {
                throw new Error("Faltan valores");
            }
            const pool = await sql.connect(dbConfig);
            const resultado = await pool.request()
            .input('idPaciente', sql.Int, idPaciente)
            .input('clinica', sql.NVarChar, clinica)
            .input('lugar', sql.NVarChar, lugar)
            .input('consultorio', sql.NVarChar, consultorio)
            .input('especialidad', sql.NVarChar, especialidad)
            .input('fecha', sql.Date, fecha)
            .query('INSERT INTO CitaMedica (idPaciente, clinica, lugar, consultorio, especialidad, fecha) VALUES (@idPaciente, @clinica, @lugar, @consultorio, @especialidad, @fecha)');

        } catch (error) {
            throw error;
        }
    }