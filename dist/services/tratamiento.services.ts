// src/services/tratamiento.services.ts
import sql from 'mssql';
import { dbConfig } from '../config/config';

// Obtener tratamientos del paciente
export const obtenerTratamientosService = async (pacienteId: string) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .query('SELECT * FROM Tratamiento WHERE pacienteId = @pacienteId');

    return result.recordset;
  } catch (error) {
    throw error;
  }
};

// Registrar nuevo tratamiento
export const registrarTratamientoService = async (
  pacienteId: string,
  nombre: string,
  descripcion: string,
  fechaInicio: string,
  fechaFin: string
) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .input('nombre', sql.VarChar, nombre)
      .input('descripcion', sql.Text, descripcion)
      .input('fechaInicio', sql.Date, fechaInicio)
      .input('fechaFin', sql.Date, fechaFin)
      .query(`INSERT INTO Tratamiento (pacienteId, nombre, descripcion, fechaInicio, fechaFin)
              VALUES (@pacienteId, @nombre, @descripcion, @fechaInicio, @fechaFin)`);

    return result;
  } catch (error) {
    throw error;
  }
};
