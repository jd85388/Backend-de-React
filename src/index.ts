import sql from 'mssql';
import express, { Router } from 'express';
import cors from 'cors';
import { dbConfig } from './config/config';
import Rutas from '../src/routes/usuario.routes'; 
const app = express();
app.use(cors());
app.use(express.json());

sql.connect(dbConfig)
    .then(() => console.log('conexion exitosa con AZURE'))
    .catch(Error => console.log('Hubo un error al conectar con AZURE:', Error));

app.post('/api/paciente', Rutas);
    app.listen(3000, () => {
        console.log(`Servidor corriendo en http://localhost:3000`);
        
    });