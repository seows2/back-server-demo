import UserEntity from '@/entity/user';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {
  async findByUid(uid: string): Promise<UserEntity | undefined> {
    const user = await this.findOne({ where: { uid } });
    return user;
  }
}

export default UserRepository;
