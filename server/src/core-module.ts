import { Module } from '@nestjs/common';
import MysqlConfig from './infra/mysql/mysql.config';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MysqlConfig, ProductModule],
})
export class AppModule {}
