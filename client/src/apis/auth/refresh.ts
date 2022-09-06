import client from '../client';
import { AuthResponseBody } from '@/types';

export const refresh = async () => {
  const apiUrl = 'api/auth/refresh';
  const response = await client.get<AuthResponseBody>(apiUrl);

  const { access } = response.data;
  client.defaults.headers.common.Authorization = `Bearer ${access}`;

  return response.data;
};
