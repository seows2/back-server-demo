import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [TypeOrmModule.forFeature(), MenuModule],
})
export class AppModule {}
