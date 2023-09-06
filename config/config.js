import  { config } from 'dotenv'; // Importamos el metodo config de dotenv
config(); // Invocamos el metodo config de dotenv

export const DBHOST = process.env.DBHOST || 'localhost'; // Obtenemos el valor de la variable de entorno DBHOST o usamos localhost por defecto
export const DBUSER = process.env.DBUSER || 'root'; // Obtenemos el valor de la variable de entorno DBUSER o usamos root por defecto
export const DBPASSWORD = process.env.DBPASSWORD || '1234'; // Obtenemos el valor de la variable de entorno DBPASSWORD o usamos 1234 por defecto
export const DATABASE = process.env.DATABASE || 'consejeria'; // Obtenemos el valor de la variable de entorno DATABASE o usamos consejeria por defecto
export const PORT = process.env.PORT || 3000; // Obtenemos el valor de la variable de entorno PORT o usamos el puerto 3000 por defecto

