import { AxiosInstance } from 'axios';

export const setResponseInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        const { status, data } = error.response;
        if (status === 400) {
          console.error('Bad request');
        }

        if (status === 500) {
          console.error('Internal Server Error');
        } else {
          console.error('Error');
        }
      }
      return Promise.reject(error);
    }
  );
};
