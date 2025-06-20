import sql from 'mssql';

export const nuevoUsuario: Usuario = {
    id_paciente: number;
    nombre: string;
    apellido: string ;
    rh: string;
    fechaNacimiento: new Date();
    telefono: number ;
    correo: string ;
    password: string ;   
}

await pool.request()
.input('nombre', sql.VarChar, nuevoUsuario.nombre);
.input('apellido', sql.VarChar, nuevoUsuario.apellido);
.input('fechaNacimiento', sql.Date, nuevoUsuario.fechaNacimiento);
.input('rh', sql.VarChar, nuevoUsuario.rh);
.input('telefono', sql.BEGINT, nuevoUsuario.telefono);
.input('correo', sql.VarChar, nuevoUsuario.correo);
.input('password', sql.VarChar, nuevoUsuairo.password);
.query('INSERT INTO paciente (nombre, apellido, fechaNacimiento, rh, telefono, correo, password) VALUES (@nombre, @apellido, @fechaNacimiento, @rh, @telefono, @correo, @password)');