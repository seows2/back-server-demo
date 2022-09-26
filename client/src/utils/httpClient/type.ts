import { AxiosRequestHeaders } from 'axios';

export interface HTTPResponse<ResponseBodyT = unknown> {
  data: ResponseBodyT;
  status: number;
}

export type HTTPMethod = 'GET' | 'DELETE' | 'POST' | 'PUT';

export interface HTTPRequestConfig<RequestBodyT = unknown> {
  url?: string;
  baseURL?: string;
  method?: HTTPMethod;
  data?: RequestBodyT;
  headers?: AxiosRequestHeaders;
}
