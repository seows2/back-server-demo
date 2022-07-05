import { Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async checkEmailExist(@Query('email') email: string) {
    return `email ${email} 검증`;
  }

  @Post()
  async signUp() {
    return `회원가입`;
  }
}
