import {ACCESS_TOKEN, BASE_URL, DEBUG_LOGGING_ENABLED, TOKEN_EXPIRED} from '@utils/constants';
import Storage from '@utils/storage';
import axios, {AxiosRequestConfig} from 'axios';

const getAxiosInstance = async () => {
  const instance = axios.create({
    baseURL: BASE_URL.Test,
    headers: {},
  });

  instance.interceptors.request.use(
    async config => {
      const data = getRequestBody(config);

      if (__DEV__ && DEBUG_LOGGING_ENABLED) {
        console.log(`%c[REQUEST] ${config.url}`, 'color: #10B981; font-weight: bold', config);
      }

      /**
       * @description routes doesn't need accesstoken
       */
      if (config.url && config.url.lastIndexOf('login') >= 0) {
        return {...config, data};
      }

      const accessToken = await Storage.getItem(ACCESS_TOKEN);
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return {...config, data};
    },
    error => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    async response => {
      if (__DEV__ && DEBUG_LOGGING_ENABLED) {
        console.log(`%c[RESPONSE] ${response.config.url}`, 'color: #FBBF24; font-weight: bold', response);
      }

      return response.data;
    },
    async error => {
      const statusCode = error?.response?.status;
      const config = error.config;
      if (statusCode === TOKEN_EXPIRED) {
        // handle token expired here
      }

      if (__DEV__ && DEBUG_LOGGING_ENABLED) {
        console.log(`%c[RESPONSE ERROR] ${config.url}`, 'color: #EF4444; font-weight: bold', error.response);
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

const getRequestBody = (config: any) => {
  let data = '';
  if (config.data && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    for (const key in config.data) {
      data = data + `${key}=${config.data[key]}&`;
    }
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }

  return data;
};

const api = async (url: string, options?: AxiosRequestConfig) => {
  try {
    const API = await getAxiosInstance();
    return API({url, ...options});
  } catch (error) {
    return Promise.reject(error);
  }
};

export default api;
