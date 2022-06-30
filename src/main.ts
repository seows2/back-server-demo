import { NestFactory } from '@nestjs/core';
import { AppModule } from './core-module';
import properties from './config/properties';

const serverPort = properties.server.port;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(serverPort);
}
bootstrap();
