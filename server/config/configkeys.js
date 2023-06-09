// Importando el paquete Dotenv
import dotenv from 'dotenv';

// Con esta función se cargan las variables
// de entorno, un aspecto importante es que en
// caso de no existir el archivo ".env" esta
// carga falla de manera silenciosa
dotenv.config();

// Crearemos un objeto que contendra
// las llaves de configuración de base de datos
export default {
  homeUrl: `${process.env.APP_URL}:${process.env.PORT}`,
  port: process.env.PORT || '3000',
  ip: process.env.IP,
};
