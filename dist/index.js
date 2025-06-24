"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const usuario_routes_1 = __importDefault(require("../src/routes/usuario.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mssql_1.default.connect(config_1.dbConfig)
    .then(() => console.log('conexion exitosa con AZURE'))
    .catch(Error => console.log('Hubo un error al conectar con AZURE:', Error));
app.use('/api', usuario_routes_1.default);
app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});
