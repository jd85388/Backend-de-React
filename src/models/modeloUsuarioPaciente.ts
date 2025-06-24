import sql from 'mssql';
import { dbConfig } from '../config/config';

export interface Usuario {
  id_paciente?: number;
  nombre: string;
  apellido: string;
  rh: string;
  fechaNacimiento: Date;
  telefono: number;
  correo: string;
  password: string;
}

export const registrarUsuario = async (nuevoUsuario: Usuario) => {
  const pool = await sql.connect(dbConfig);
  await pool.request()
    .input('nombre', sql.VarChar, nuevoUsuario.nombre)
    .input('apellido', sql.VarChar, nuevoUsuario.apellido)
    .input('fechaNacimiento', sql.Date, nuevoUsuario.fechaNacimiento)
    .input('rh', sql.VarChar, nuevoUsuario.rh)
    .input('telefono', sql.BigInt, nuevoUsuario.telefono)
    .input('correo', sql.VarChar, nuevoUsuario.correo)
    .input('password', sql.VarChar, nuevoUsuario.password)
    .query('INSERT INTO paciente (nombre, apellido, fechaNacimiento, rh, telefono, correo, password) VALUES (@nombre, @apellido, @fechaNacimiento, @rh, @telefono, @correo, @password)');
};
