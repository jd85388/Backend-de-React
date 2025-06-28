import sql from 'mssql';
import bcrypt from 'bcrypt';
import { dbConfig } from '../config/config';

export const loginUsuarioService = async (correo: string, password: string) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('correo', sql.VarChar, correo)
            .input('password', sql.VarChar, password)
            .query('SELECT * FROM paciente WHERE correo = @correo');
        const usuario = result.recordset[0];

    if (!usuario) {
        return null;
    }

    const match = await bcrypt.compare(password, usuario.password);
        if (!match) {
            return null;
        }   
        return usuario;
    } catch (error) {
        throw error;
    }
};

export const registrarUsuarioService = async (nombre: string, apellido: string, rh: string, fechaNacimiento: Date, telefono: number, correo: string, password: string ) => {
    try {
        const pool = await sql.connect(dbConfig);
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('apellido', sql.VarChar, apellido)
            .input('rh', sql.VarChar, rh)
            .input('fechaNacimiento', sql.Date, fechaNacimiento)
            .input('telefono', sql.BigInt, telefono)
            .input('correo', sql.VarChar, correo)
            .input('password', sql.VarChar, hashedPassword)
            .query('INSERT INTO Paciente (nombre, apellido, rh, fechaNacimiento, telefono, correo, password) VALUES (@nombre, @apellido, @rh, @fechaNacimiento, @telefono, @correo, @password)');
            
            return result;
        } catch (error) {
            throw error;
        }
};