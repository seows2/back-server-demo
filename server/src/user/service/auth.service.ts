import { Injectable, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import properties from 'src/config/properties';
import { Users } from '../domain/Users';
import { SigninRequest } from '../dto/signin-request';
import PasswordEncoder from '../helper/password-encoder';

@Injectable()
export class AuthService {
  constructor(
    private readonly users: Users,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(
    signinRequest: SigninRequest,
    @Res({ passthrough: true }) signinResponse: Response,
  ) {
    const user = await this.users.findUserByEmail(signinRequest.email);
    if (!user) throw Error('유저 없음');

    const { id, password } = user;
    if (!password || PasswordEncoder.check(password, signinRequest.password)) {
      throw Error('로그인 실패');
    }

    const token = await this.jwtService.signAsync({ id });
    if (!token) {
      throw Error('토큰 발급 실패');
    }

    signinResponse.cookie(properties.auth.tokenKey, token);

    return '로그인 성공!';
  }

  signOut(@Res({ passthrough: true }) signoutResponse: Response) {
    try {
      signoutResponse.clearCookie(properties.auth.tokenKey);
      return '로그아웃 성공!';
    } catch (error) {
      throw Error('로그인 실패');
    }
  }

  verifyToken(@Req() request: Request) {
    const token = request.cookies[properties.auth.tokenKey];
    if (!token) {
      throw Error('토큰 없음');
    }

    return !!this.jwtService.verifyAsync(token);
  }
}
