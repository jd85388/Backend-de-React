// ✅ Archivo: odontologia.services.ts
// ✅ Ruta: src/services/odontologia.services.ts

import sql from 'mssql';
import { dbConfig } from '../config/config';

// Registrar cita odontológica
export const registrarCitaOdontologiaService = async (
  pacienteId: number,
  centroMedicoId: number,
  fecha: string,
  hora: string,
  especialistaId: number
) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .input('centroMedicoId', sql.Int, centroMedicoId)
      .input('fecha', sql.Date, fecha)
      .input('hora', sql.VarChar, hora)
      .input('especialistaId', sql.Int, especialistaId)
      .query(`
        INSERT INTO CitaOdontologia (pacienteId, centroMedicoId, fecha, hora, especialistaId)
        VALUES (@pacienteId, @centroMedicoId, @fecha, @hora, @especialistaId)
      `);
    return result;
  } catch (error) {
    throw error;
  }
};

// Obtener citas por paciente
export const obtenerCitasOdontologiaService = async (pacienteId: number) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .query(`
        SELECT * FROM CitaOdontologia
        WHERE pacienteId = @pacienteId
        ORDER BY fecha DESC, hora DESC
      `);
    return result.recordset;
  } catch (error) {
    throw error;
  }
};
