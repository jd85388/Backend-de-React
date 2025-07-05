// src/services/medicamento.services.ts
import sql from 'mssql';
import { dbConfig } from '../config/config';

// Obtener medicamentos por pacienteId
export const obtenerMedicamentosService = async (pacienteId: string) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .query('SELECT * FROM Medicamento WHERE pacienteId = @pacienteId');

    return result.recordset;
  } catch (error) {
    throw error;
  }
};

// Registrar nuevo medicamento
export const registrarMedicamentoService = async (
  pacienteId: string,
  nombre: string,
  dosis: string,
  frecuencia: string,
  hora: string
) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .input('nombre', sql.VarChar, nombre)
      .input('dosis', sql.VarChar, dosis)
      .input('frecuencia', sql.VarChar, frecuencia)
      .input('hora', sql.VarChar, hora)
      .query(`INSERT INTO Medicamento (pacienteId, nombre, dosis, frecuencia, hora)
              VALUES (@pacienteId, @nombre, @dosis, @frecuencia, @hora)`);

    return result;
  } catch (error) {
    throw error;
  }
};
