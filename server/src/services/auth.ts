import { ERROR } from '@/constants/error';
import JwtHelper from '@/helpers/jwt';
import UserRepository from '@/repositories/user';
import { UserLoginInfo } from '@/types';
import ErrorResponse from '@/utils/errorResponse';
import { comparePassword } from '@/utils/hash';
import { Inject, Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
class AuthService {
  private userRepository: UserRepository;

  private jwtHelper: JwtHelper;

  constructor(
    @InjectRepository(UserRepository) userRepository: UserRepository,
    @Inject('jwtHelper') jwtHelper: JwtHelper,
  ) {
    this.userRepository = userRepository;
    this.jwtHelper = jwtHelper;
  }

  async login({ userId, password }: UserLoginInfo) {
    const user = await this.userRepository.findByUserId(userId);
    if (!user) {
      throw new ErrorResponse(ERROR.UNAUTHORIZED);
    }

    const isValid = comparePassword(user.password, password);
    if (!isValid) {
      throw new ErrorResponse(ERROR.UNAUTHORIZED);
    }

    const tokens = this.jwtHelper.generateJwtTokens(user);
    return tokens;
  }

  async refreshAccessToken(refreshToken: string) {
    if (!refreshToken) {
      throw new ErrorResponse(ERROR.UNAUTHORIZED);
    }

    const { uid } = this.jwtHelper.decodeRefreshToken(refreshToken);

    const user = await this.userRepository.findByUid(uid);
    if (!user) {
      throw new ErrorResponse(ERROR.UNAUTHORIZED);
    }

    const access = this.jwtHelper.generateAccessToken(user);
    return { access };
  }
}

export default AuthService;
