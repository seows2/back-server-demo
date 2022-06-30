import * as dotenv from 'dotenv';
dotenv.config();

export default {
  server: {
    port: 8080,
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_USERNAME || 'CHANGE_THIS',
    database: process.env.MYSQL_USERNAME || 'db',
  },
};
