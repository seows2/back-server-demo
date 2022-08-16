import { ERROR } from '@/constants/error';
import UserRepository from '@/repositories/user';
import ErrorResponse from '@/utils/errorResponse';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
class UserService {
  private userRepository: UserRepository;

  constructor(@InjectRepository(UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUser(uid: string) {
    const user = await this.userRepository.findByUid(uid);
    if (!user) {
      throw new ErrorResponse(ERROR.UNAUTHORIZED);
    }
    return user;
  }
}

export default UserService;
