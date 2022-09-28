import { AuthResponseBody, LoginRequestBody } from '@/types';
import Api from '../api';

class AuthApi extends Api {
  async login(reqData: LoginRequestBody) {
    const response = await this.post<AuthResponseBody, LoginRequestBody>(reqData);

    const { access } = response.data;
    this.setAccessToken(access);

    return response.data;
  }

  async logout() {
    await this.delete();
    this.clearAccessToken();
  }

  async refresh() {
    const response = await this.get<AuthResponseBody>();

    const { access } = response.data;
    this.setAccessToken(access);

    return response.data;
  }
}

export default AuthApi;
