import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../dto/create-user';
import { User } from '../entity/user';

@Injectable()
export class Users {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findUserByEmail(email: string) {
    const result = await this.userRepository.findOne({ where: { email } });
    return result;
  }

  async createUser(user: CreateUserDTO) {
    const result = await this.userRepository.insert(user);
    return result;
  }

  async createAndGetUserId(user: CreateUserDTO) {
    const result = await this.createUser(user);
    return result.identifiers[0]?.id ?? 0;
  }
}
