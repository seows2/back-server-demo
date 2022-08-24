import config from '@/config';
import JwtHelper, { JwtOptions } from '@/helpers/jwt';
import { getJwtAlgorithm } from '@/utils/jwt';
import { ObjectLiteral } from 'typeorm';
import dependencyInjector, { DependencyInfo } from './dependencyInjector';

const helperInjector = () => {
  const { algorithm, secret, expire } = config.jwt;
  const jwtOptions: JwtOptions = {
    algorithm: getJwtAlgorithm(algorithm),
    secret,
    accessExpiresInHour: expire.access,
    refreshExpiresInHour: expire.refresh,
  };

  const helpers: DependencyInfo<ObjectLiteral>[] = [
    { name: 'jwtHelper', dependency: new JwtHelper(jwtOptions) },
  ];

  dependencyInjector<ObjectLiteral>(helpers);
};

export default helperInjector;
