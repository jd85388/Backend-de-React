// src/services/notificaciones.services.ts
import sql from 'mssql';
import { dbConfig } from '../config/config';

// Registrar una notificación
export const crearNotificacionService = async (
  pacienteId: string,
  mensaje: string,
  leido: boolean = false
) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .input('mensaje', sql.VarChar, mensaje)
      .input('leido', sql.Bit, leido)
      .query(`INSERT INTO Notificaciones (pacienteId, mensaje, leido)
              VALUES (@pacienteId, @mensaje, @leido)`);

    return result;
  } catch (error) {
    throw error;
  }
};

// Obtener notificaciones por paciente
export const obtenerNotificacionesService = async (pacienteId: string) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .query(`SELECT * FROM Notificaciones WHERE pacienteId = @pacienteId ORDER BY fecha DESC`);

    return result.recordset;
  } catch (error) {
    throw error;
  }
};

// Marcar una notificación como leída
export const marcarComoLeidaService = async (notificacionId: string) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('notificacionId', sql.Int, notificacionId)
      .query(`UPDATE Notificaciones SET leido = 1 WHERE id = @notificacionId`);

    return result;
  } catch (error) {
    throw error;
  }
};
