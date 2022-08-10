import UserEntity from '@/entity/user';
import { ObjectLiteral } from 'typeorm';
import dependencyInjector, { DependencyInfo } from './dependencyInjector';

const entityInjector = () => {
  const entities: DependencyInfo<ObjectLiteral>[] = [
    { name: 'userEntity', dependency: new UserEntity() },
  ];

  dependencyInjector<ObjectLiteral>(entities);
};

export default entityInjector;
