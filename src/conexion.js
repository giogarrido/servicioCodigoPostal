import {createPool} from "mysql2/promise"; // Importamos el metodo createPool de mysql2/promise
import 'dotenv/config'; // Importamos el metodo config de dotenv

export const pool = createPool({
    connectionLimit: 10, // Limite de conexiones
    host: process.env.DBHOST,  //env es un objeto que contiene todas las variables de entorno 'npm i dotenv'
    user: process.env.DBUSER, 
    password: process.env.DBPASSWORD ,
    database: process.env.DATABASE,
  });

