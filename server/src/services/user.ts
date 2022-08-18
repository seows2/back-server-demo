import { ERROR } from '@/constants/error';
import UserRepository from '@/repositories/user';
import { UpdateInfo, UserInfo } from '@/types';
import ErrorResponse from '@/utils/errorResponse';
import { generateHash } from '@/utils/hash';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
class UserService {
  private userRepository: UserRepository;

  constructor(@InjectRepository(UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUser(uid: string): Promise<{ userId: string } & UpdateInfo> {
    const user = await this.userRepository.findByUid(uid);
    if (!user) {
      throw new ErrorResponse(ERROR.UNAUTHORIZED);
    }
    const { userId, createdAt, updatedAt } = user;
    return { userId, createdAt, updatedAt };
  }

  async createUser(userInfo: UserInfo): Promise<{ uid: string } & UpdateInfo> {
    const alreadyRegisteredUser = await this.userRepository.findByUserId(userInfo.userId);
    if (alreadyRegisteredUser) {
      throw new ErrorResponse(ERROR.CONFLICT);
    }
    const hashedPassword = generateHash(userInfo.password);

    const userInfoToCreate = { ...userInfo, password: hashedPassword };
    const { uid, createdAt, updatedAt } = await this.userRepository.createUser(userInfoToCreate);

    return { uid, createdAt, updatedAt };
  }
}

export default UserService;
