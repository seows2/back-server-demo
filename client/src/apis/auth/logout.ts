import client from '../client';

export const logout = async () => {
  const apiUrl = '/api/auth/logout';
  await client.get<void>(apiUrl);

  client.defaults.headers.common.Authorization = '';
};
