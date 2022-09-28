import { AuthResponseBody } from '@/types';
import { HTTPClient, HTTPResponse } from '@/utils/httpClient';
import { ApiRequestConfig } from './types';

abstract class Api {
  private readonly ACCESS_TOKEN_HEADER = 'Authorization';

  private apiUrl: string;

  protected client: HTTPClient;

  constructor(client: HTTPClient, apiUrl: string) {
    this.client = client;
    this.apiUrl = apiUrl;
  }

  protected setAccessToken(accessToken: string) {
    this.client.setHeader(this.ACCESS_TOKEN_HEADER, `Bearer ${accessToken}`);
  }

  protected clearAccessToken() {
    this.client.setHeader(this.ACCESS_TOKEN_HEADER, '');
  }

  private async requestWithSilentRefresh<ResponseBodyT>(
    request: () => Promise<HTTPResponse<ResponseBodyT & Partial<AuthResponseBody>>>,
  ) {
    const response = await request();

    const { access = '', requestAgain = false } = response.data;

    if (access) this.setAccessToken(access);
    if (!requestAgain) return response;

    return request();
  }

  protected async get<ResponseBodyT, ReqeustBodyT = unknown>(
    config?: ApiRequestConfig<ReqeustBodyT>,
  ) {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () => this.client.get<ResponseBodyT, ReqeustBodyT>(url, config);

    return this.requestWithSilentRefresh<ResponseBodyT>(request);
  }

  protected async delete<ResponseBodyT, ReqeustBodyT>(config?: ApiRequestConfig<ReqeustBodyT>) {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () => this.client.delete<ResponseBodyT, ReqeustBodyT>(url, config);

    return this.requestWithSilentRefresh<ResponseBodyT>(request);
  }

  protected async post<ResponseBodyT, ReqeustBodyT>(
    data: ReqeustBodyT,
    config?: ApiRequestConfig<ReqeustBodyT>,
  ) {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () => this.client.post<ResponseBodyT, ReqeustBodyT>(url, data, config);

    return this.requestWithSilentRefresh<ResponseBodyT>(request);
  }

  protected async put<ResponseBodyT, ReqeustBodyT>(
    data: ReqeustBodyT,
    config?: ApiRequestConfig<ReqeustBodyT>,
  ) {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () => this.client.put<ResponseBodyT, ReqeustBodyT>(url, data, config);

    return this.requestWithSilentRefresh<ResponseBodyT>(request);
  }
}

export * from './types';
export default Api;
