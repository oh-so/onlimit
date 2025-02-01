import { AxiosInstance } from 'axios/index';

import apiClient from './instance';
import { setRequestInterceptor } from './interceptor/request';
import { setResponseInterceptor } from './interceptor/response';

export const initializeApiClient = (): AxiosInstance => {
  setRequestInterceptor(apiClient);
  setResponseInterceptor(apiClient);
  return apiClient;
}