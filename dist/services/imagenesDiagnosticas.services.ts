// src/services/imagenes.services.ts
import sql from 'mssql';
import { dbConfig } from '../config/config';

export const subirImagenDiagnosticaService = async (datos: {
  pacienteId: number;
  tipo: string;
  fecha: string;
  url: string;
}) => {
  try {
    const pool = await sql.connect(dbConfig);
    const resultado = await pool.request()
      .input('pacienteId', sql.Int, datos.pacienteId)
      .input('tipo', sql.VarChar, datos.tipo)
      .input('fecha', sql.Date, datos.fecha)
      .input('url', sql.VarChar, datos.url)
      .query(`
        INSERT INTO ImagenesDiagnosticas (pacienteId, tipo, fecha, url)
        VALUES (@pacienteId, @tipo, @fecha, @url)
      `);
    return resultado;
  } catch (error) {
    throw error;
  }
};

export const obtenerImagenesPorPacienteService = async (pacienteId: number) => {
  try {
    const pool = await sql.connect(dbConfig);
    const resultado = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .query(`SELECT * FROM ImagenesDiagnosticas WHERE pacienteId = @pacienteId`);
    return resultado.recordset;
  } catch (error) {
    throw error;
  }
};
