// src/services/medicamento.services.ts
import sql from 'mssql';
import { dbConfig } from '../config/config';

export const obtenerMedicamentos = async (pacienteId: number) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .query('SELECT * FROM Medicamento WHERE pacienteId = @pacienteId');
    return result.recordset;
  } catch (error) {
    throw new Error('Error al obtener los medicamentos');
  }
};

export const registrarMedicamento = async (medicamento: any) => {
  const { pacienteId, nombre, dosis, frecuencia, hora } = medicamento;
  try {
    const pool = await sql.connect(dbConfig);
    await pool.request()
      .input('pacienteId', sql.Int, pacienteId)
      .input('nombre', sql.VarChar, nombre)
      .input('dosis', sql.VarChar, dosis)
      .input('frecuencia', sql.VarChar, frecuencia)
      .input('hora', sql.Time, hora)
      .query(`INSERT INTO Medicamento (pacienteId, nombre, dosis, frecuencia, hora)
              VALUES (@pacienteId, @nombre, @dosis, @frecuencia, @hora)`);
    return true;
  } catch (error) {
    throw new Error('Error al registrar el medicamento');
  }
};
