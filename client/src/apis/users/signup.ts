import client from '../client';
import { LoginRequestBody, UpdateInfoResponseBody } from '../types';

export const signup = async (reqBody: LoginRequestBody) => {
  const apiUrl = '/api/users';
  const response = await client.post<UpdateInfoResponseBody>(apiUrl, reqBody);

  return response.data;
};
