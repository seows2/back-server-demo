import { AxiosRequestHeaders } from 'axios';
import { HTTPRequestConfig, HTTPResponse } from './type';

abstract class HTTPClient {
  abstract setHeader(key: string, value: string): void;

  abstract getHeader(): AxiosRequestHeaders | undefined;

  abstract request<ResponseBodyT = unknown, RequestBodyT = unknown>(
    config: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>>;

  async get<ResponseBodyT = unknown, RequestBodyT = unknown>(
    url: string,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request({ ...config, url, method: 'GET' });
  }

  async delete<ResponseBodyT = unknown, RequestBodyT = unknown>(
    url: string,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request({ ...config, url, method: 'DELETE' });
  }

  async post<ResponseBodyT = unknown, RequestBodyT = unknown>(
    url: string,
    data: RequestBodyT,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request({ ...config, url, data, method: 'POST' });
  }

  async put<ResponseBodyT = unknown, RequestBodyT = unknown>(
    url: string,
    data: RequestBodyT,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request({ ...config, url, data, method: 'PUT' });
  }
}

export default HTTPClient;
