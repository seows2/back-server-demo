import { Module } from '@nestjs/common';
import MysqlConfig from './infra/mysql/mysql.config';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MysqlConfig, ProductModule, UserModule],
})
export class AppModule {}
