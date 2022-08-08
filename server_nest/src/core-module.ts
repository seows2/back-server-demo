import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import properties from './config/properties';
import MysqlConfig from './infra/mysql/mysql.config';
import { JwtMiddleware } from './jwt-middleware';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

const jwtConfig = properties.auth;

@Module({
  imports: [
    MysqlConfig,
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: { expiresIn: jwtConfig.expiresIn },
    }),
    ProductModule,
    UserModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude('/auth')
      .exclude('/auth/*')
      .exclude('/users')
      .exclude('/users/*')
      .forRoutes('*');
  }
}
