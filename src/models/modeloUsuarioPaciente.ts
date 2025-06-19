import sql from 'mssql';

const nuevoUsuario: Usuario = {
    id_paciente: 0;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    telefono: number;
    correo: string;
    password: string;   
}

await pool.request()
.input('nombre', sql.VarChar, nuevoUsuario.nombre)
.input('correo', sql.VarChar, nuevoUsuario.correo)
.query('INSERT INTO paciente (nombre, correo) VALUES (@nombre, @correo)');