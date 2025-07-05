// src/services/historiaClinica.services.ts
import sql from 'mssql';
import { dbConfig } from '../config/config';

export const crearHistoriaClinicaService = async (datos: {
  pacienteId: number;
  diagnostico: string;
  observaciones: string;
}) => {
  try {
    const pool = await sql.connect(dbConfig);
    const resultado = await pool.request()
      .input('pacienteId', sql.Int, datos.pacienteId)
      .input('diagnostico', sql.VarChar, datos.diagnostico)
      .input('observaciones', sql.VarChar, datos.observaciones)
      .query(`
        INSERT INTO HistoriaClinica (pacienteId, diagnostico, observaciones)
        VALUES (@pacienteId, @diagnostico, @observaciones)
      `);
    return resultado;
  } catch (error) {
    throw error;
  }
};

export const obtenerHistoriaClinicaService = async (pacienteId: number) => {
  try {
    const pool = await sql.connect(dbConfig);
    const resultado = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .query(`SELECT * FROM HistoriaClinica WHERE pacienteId = @pacienteId`);
    return resultado.recordset;
  } catch (error) {
    throw error;
  }
};
