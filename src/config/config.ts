import { config as SqlConfig } from "mssql";

export const dbConfig:  SqlConfig = {
    user: 'admin123',
    password: 'lifeReminder001',
    server: "lifereminderpruebas.database.windows.net",
    database: 'Life_Reminder',
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};
