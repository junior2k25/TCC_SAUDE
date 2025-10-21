import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const con = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB
});

console.log('--> Banco de dados conectado <--');

export default con;
