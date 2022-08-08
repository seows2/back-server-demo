import { NestFactory } from '@nestjs/core';
import { AppModule } from './core-module';
import * as cookieParser from 'cookie-parser';
import properties from './config/properties';

const serverPort = properties.server.port;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [properties.client],
    methods: 'GET,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });
  app.use(cookieParser());
  await app.listen(serverPort);
}
bootstrap();
