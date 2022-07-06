import { Body, Controller, Delete, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { SigninRequest } from '../dto/signin-request';
import { AuthService } from '../service/auth.service';

@Controller('/auth')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signIn(
    @Body() signinRequest: SigninRequest,
    @Res({ passthrough: true }) signinResponse: Response,
  ) {
    await this.authService.signIn(signinRequest, signinResponse);
    return '로그인';
  }

  @Delete()
  signOut(@Res({ passthrough: true }) signoutResponse: Response) {
    this.authService.signOut(signoutResponse);
    return '로그아웃';
  }
}
