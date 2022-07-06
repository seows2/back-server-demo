import * as bcrypt from 'bcrypt';
import properties from 'src/config/properties';

export default class PasswordEncoder {
  static encode(password: string) {
    return bcrypt.hashSync(
      password,
      bcrypt.genSaltSync(properties.auth.saltRounds),
    );
  }

  static check(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
