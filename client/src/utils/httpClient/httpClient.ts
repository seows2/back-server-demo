import { AxiosRequestHeaders } from 'axios';
import { HTTPRequestConfig, HTTPResponse } from './type';

abstract class HTTPClient {
  abstract setHeader(key: string, value: string): void;

  abstract getHeader(): AxiosRequestHeaders | undefined;

  abstract request<ResponseBodyT, RequestBodyT>(
    config: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>>;

  async get<ResponseBodyT, RequestBodyT>(
    url: string,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request<ResponseBodyT, RequestBodyT>({ ...config, url, method: 'GET' });
  }

  async delete<ResponseBodyT, RequestBodyT>(
    url: string,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request<ResponseBodyT, RequestBodyT>({ ...config, url, method: 'DELETE' });
  }

  async post<ResponseBodyT, RequestBodyT>(
    url: string,
    data: RequestBodyT,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request<ResponseBodyT, RequestBodyT>({ ...config, url, data, method: 'POST' });
  }

  async put<ResponseBodyT, RequestBodyT>(
    url: string,
    data: RequestBodyT,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request<ResponseBodyT, RequestBodyT>({ ...config, url, data, method: 'PUT' });
  }
}

export default HTTPClient;
