import sql from 'mssql';
import { dbConfig } from '../config/config';

export const loginUsuarioService = async (correo: string, password: string) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('correo', sql.VarChar, correo)
            .input('password', sql.VarChar, passowrd)
            .query('SELECT * FROM Usuario WHERE correo = @correo AND password = @password');

        return result.recordset[0];    
    } catch (error) {
        throw error;
    }
};

export const registrarUsuarioService = async (nombre: string, apellido: string, rh: string, telefono: number, correo: string, contraseña: string ) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('apellido', sql.VarChar, apellido)
            .input('rh', sql.VarChar, rh)
            .input('telefono' sql.BegInt, telefono)
            .input('correo', sql.VarChar, correo)
            .input('password', sql.VarChart, passowrd)
            .query('INSERT INTO Paciente (nombre, apellido, rh, telefono, correo, password) VALUES (@nombre, @apellido, @rh, @telefono, @correo, @password)');
            
            return result;
        } catch (error) {
            throw error;
        }
};