import {createPool} from "mysql2/promise"; // Importamos el metodo createPool de mysql2/promise
import { 
  DBHOST,
  DBUSER,
  DBPASSWORD,
  DATABASE,
} from '../config/config.js' // Importamos las variables de entorno de config.js

export const pool = createPool({
  connectionLimit: 10, // Limite de conexiones
  host: DBHOST,
  user: DBUSER,
  password: DBPASSWORD,
  database: DATABASE,
});

