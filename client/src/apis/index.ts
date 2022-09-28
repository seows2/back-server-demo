import { createAxiosHTTPClient } from '@/utils/httpClient';
import AuthApi from './authApi';
import UserApi from './userApi';

const getApiBaseURL = (): string => {
  return process.env.REACT_APP_BASE_URL ?? '/';
};

const baseURL = getApiBaseURL();
const client = createAxiosHTTPClient({ baseURL, withCredentials: true });

export const authApi = new AuthApi(client, '/api/auth');
export const userApi = new UserApi(client, '/api/users');
