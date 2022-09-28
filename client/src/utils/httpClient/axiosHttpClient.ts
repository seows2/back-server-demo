import { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

import HTTPClient from './httpClient';
import HTTPError from './httpError';
import { HTTPRequestConfig, HTTPResponse } from './type';

class AxiosHTTPClient extends HTTPClient {
  private readonly client: AxiosInstance;

  private defaultRequestConfig: AxiosRequestConfig;

  constructor(client: AxiosInstance, defaultConfig: AxiosRequestConfig) {
    super();
    this.client = client;
    this.defaultRequestConfig = defaultConfig;
  }

  async request<ResponseBodyT, RequestBodyT>(
    config: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    try {
      const requestConfig = { ...this.defaultRequestConfig, ...config };
      const response = await this.client(requestConfig);

      const { data, status } = response;

      return { data, status };
    } catch (error: any) {
      const httpErrorResponse: HTTPResponse<RequestBodyT> = {
        data: error.response?.data,
        status: error.response?.status,
      };

      throw new HTTPError({
        message: error.message,
        response: error.response ? httpErrorResponse : undefined,
      });
    }
  }

  setHeader(key: string, value: string): void {
    this.defaultRequestConfig = {
      ...this.defaultRequestConfig,
      headers: {
        ...this.defaultRequestConfig.headers,
        [key]: value,
      },
    };
  }

  getHeader(): AxiosRequestHeaders | undefined {
    return this.defaultRequestConfig.headers;
  }
}

export default AxiosHTTPClient;
