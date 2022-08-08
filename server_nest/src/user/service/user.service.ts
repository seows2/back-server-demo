import { Injectable, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import properties from 'src/config/properties';
import { Users } from '../domain/Users';
import { CheckEmailResponse } from '../dto/check-email-response';
import { CreateUserDTO } from '../dto/create-user';
import PasswordEncoder from '../helper/password-encoder';

@Injectable()
export class UserService {
  constructor(
    private readonly users: Users,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(
    user: CreateUserDTO,
    @Res({ passthrough: true }) signupResponse: Response,
  ) {
    try {
      const userId = await this.createUser(user);
      if (!userId) throw Error('유저 생성 실패');

      const token = await this.jwtService.signAsync({ userId });
      if (!token) throw Error('토큰 생성 실패');

      signupResponse.cookie(properties.auth.tokenKey, token);

      return '회원가입 성공!';
    } catch (error) {
      throw Error(error);
    }
  }

  async createUser(user: CreateUserDTO): Promise<number> {
    try {
      user.password = PasswordEncoder.encode(user.password);
      const newUser = await this.users.createAndGetUserId(user);
      return newUser;
    } catch (error) {
      throw Error('회원가입 실패');
    }
  }

  async checkEmailExist(email: string): Promise<CheckEmailResponse> {
    try {
      return { isExist: !!(await this.users.findUserByEmail(email)) };
    } catch (error) {
      throw Error(error);
    }
  }
}
