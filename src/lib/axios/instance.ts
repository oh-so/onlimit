import axios from 'axios';
import { AxiosInstance } from 'axios';

import { setRequestInterceptor } from './interceptor/request';
import { setResponseInterceptor } from './interceptor/response';

//TEST URL
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

// TODO: client component only
export const initializeApiClient = (): AxiosInstance => {
  setRequestInterceptor(apiClient);
  setResponseInterceptor(apiClient);
  return apiClient;
};
export default apiClient;
