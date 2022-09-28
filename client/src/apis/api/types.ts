import { HTTPRequestConfig } from '@/utils/httpClient/type';

export interface ApiRequestConfig<RequestBodyT>
  extends Omit<HTTPRequestConfig<RequestBodyT>, 'url'> {
  additionalUri?: string;
}
