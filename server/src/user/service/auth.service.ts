import { Injectable, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { Exception } from 'src/config/filter/exceptionHandler';
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
    const { email, password } = signinRequest;
    const user = await this.users.findUserByEmail(email);
    if (!user) throw new Exception(406, '유저 없음');

    const { id: userId, password: userPwd } = user;

    if (!password || !PasswordEncoder.check(password, userPwd)) {
      throw new Exception(406, '비밀번호 다름');
    }

    const token = await this.jwtService.signAsync({ userId });
    if (!token) {
      throw new Exception(406, '토큰 발급 실패');
    }

    signinResponse.cookie(properties.auth.tokenKey, token);

    return '로그인 성공!';
  }

  signOut(@Res({ passthrough: true }) signoutResponse: Response) {
    try {
      signoutResponse.clearCookie(properties.auth.tokenKey);
      return '로그아웃 성공!';
    } catch (error) {
      throw new Exception(400, '로그아웃 실패');
    }
  }

  verifyToken(@Req() request: Request) {
    const token = request.cookies[properties.auth.tokenKey];
    if (!token) {
      throw new Exception(407);
    }

    return !!this.jwtService.verifyAsync(token);
  }
}
