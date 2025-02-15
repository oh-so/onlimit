import { AxiosInstance } from 'axios';

export const setRequestInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      console.error('Request Error: ', error);
      return Promise.reject(error);
    }
  );
};
