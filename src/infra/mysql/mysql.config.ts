import { TypeOrmModule } from '@nestjs/typeorm';
import properties from 'src/config/properties';

const { host, port, username, password, database } = properties.mysql;

export default TypeOrmModule.forRoot({
  type: 'mysql',
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
});
