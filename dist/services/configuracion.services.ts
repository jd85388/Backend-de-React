// src/services/configuracion.services.ts
import sql from 'mssql';
import { dbConfig } from '../config/config';

// Obtener configuración de un paciente
export const obtenerConfiguracionService = async (pacienteId: string) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .query('SELECT * FROM Configuracion WHERE pacienteId = @pacienteId');

    return result.recordset[0];
  } catch (error) {
    throw error;
  }
};

// Actualizar configuración
export const actualizarConfiguracionService = async (
  pacienteId: string,
  notificaciones: boolean,
  modoOscuro: boolean,
  idioma: string
) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .input('notificaciones', sql.Bit, notificaciones)
      .input('modoOscuro', sql.Bit, modoOscuro)
      .input('idioma', sql.VarChar, idioma)
      .query(`UPDATE Configuracion
              SET notificaciones = @notificaciones,
                  modoOscuro = @modoOscuro,
                  idioma = @idioma
              WHERE pacienteId = @pacienteId`);

    return result;
  } catch (error) {
    throw error;
  }
};
