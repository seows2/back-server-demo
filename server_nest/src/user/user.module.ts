import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import properties from 'src/config/properties';
import { AuthController } from './controller/auth.controller';
import { UserController } from './controller/user.controller';
import { Users } from './domain/Users';
import { User } from './entity/user';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

const jwtConfig = properties.auth;

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: { expiresIn: jwtConfig.expiresIn },
    }),
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService, Users],
})
export class UserModule {}
