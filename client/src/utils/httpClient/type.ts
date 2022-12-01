import { AxiosRequestHeaders } from 'axios';

export interface HTTPResponse<ResponseBodyT> {
  data: ResponseBodyT;
  status: number;
}

export type HTTPMethod = 'GET' | 'DELETE' | 'POST' | 'PUT';

export interface HTTPRequestConfig<RequestBodyT> {
  url?: string;
  baseURL?: string;
  method?: HTTPMethod;
  data?: RequestBodyT;
  headers?: AxiosRequestHeaders;
  params?: any;
}
