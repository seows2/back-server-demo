import axios, { AxiosRequestConfig } from 'axios';

import AxiosHTTPClient from './axiosHttpClient';

export * from './type';
export { default as HTTPClient } from './httpClient';

export const createAxiosHTTPClient = (defaultConfig: AxiosRequestConfig) => {
  const client = axios.create();

  const axiosHTTPClient = new AxiosHTTPClient(client, defaultConfig);

  return axiosHTTPClient;
};
