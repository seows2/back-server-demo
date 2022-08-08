import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDTO } from '../dto/create-user';
import { UserService } from '../service/user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async checkEmailExist(@Query('email') email: string) {
    return this.userService.checkEmailExist(email);
  }

  @Post()
  async signUp(
    @Body() signupRequest: CreateUserDTO,
    @Res({ passthrough: true }) signupResponse: Response,
  ) {
    await this.userService.signUp(signupRequest, signupResponse);
    return `회원가입`;
  }
}
