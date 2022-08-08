import * as dotenv from 'dotenv';
dotenv.config();

export default {
  client: process.env.CLIENT || 'http://localhost:3000',
  server: {
    port: process.env.SERVER_PORT || 8080,
  },
  auth: {
    secret: process.env.JWT_SECRET || '',
    expiresIn: process.env.JWT_EXPIRES_IN || '12H',
    bearer: 'Bearer ',
    saltRounds: 10,
    tokenKey: 'token',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || 'CHANGE_THIS',
    database: process.env.MYSQL_DATABASE || 'db',
  },
};
