// src/services/citas.services.ts
import sql from 'mssql';
import { dbConfig } from '../config/config';

export const registrarCitaMedicaService = async (datos: {
  pacienteId: number;
  centroId: string;
  fecha: string;
  hora: string;
  especialistaId: string;
}) => {
  try {
    const pool = await sql.connect(dbConfig);
    const resultado = await pool.request()
      .input('pacienteId', sql.Int, datos.pacienteId)
      .input('centroId', sql.VarChar, datos.centroId)
      .input('fecha', sql.Date, datos.fecha)
      .input('hora', sql.VarChar, datos.hora)
      .input('especialistaId', sql.VarChar, datos.especialistaId)
      .query(`
        INSERT INTO CitasMedicas (pacienteId, centroId, fecha, hora, especialistaId)
        VALUES (@pacienteId, @centroId, @fecha, @hora, @especialistaId)
      `);
    return resultado;
  } catch (error) {
    throw error;
  }
};

export const obtenerCitasMedicasService = async (pacienteId: number) => {
  try {
    const pool = await sql.connect(dbConfig);
    const resultado = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .query(`SELECT * FROM CitasMedicas WHERE pacienteId = @pacienteId`);
    return resultado.recordset;
  } catch (error) {
    throw error;
  }
};
