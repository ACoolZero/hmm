import {reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import store from '@store';
import {GET_REFRESH_TOKEN, LOGOUT_ACCOUNT, SHOW_ALERT, _onSuccess} from '@store/actions';
import {
  ACCESS_TOKEN,
  BASE_URL,
  DEBUG_LOGGING_ENABLED,
  REFRESH_EXPIRES_AT,
  REFRESH_TOKEN,
  TOKEN_EXPIRED,
} from '@utils/constants';
import {getCurrentDate, sleep} from '@utils/date';
import Storage from '@utils/storage';
import axios, {AxiosRequestConfig, InternalAxiosRequestConfig} from 'axios';
import FastImage from 'react-native-fast-image';

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
      if (
        config.url &&
        (config.url.lastIndexOf('sign-up') >= 0 ||
          config.url.lastIndexOf('login') >= 0 ||
          config.url.lastIndexOf('logout') >= 0)
      ) {
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
        // const TOKEN_EXPIRED_TIME = await Storage.getItem(REFRESH_EXPIRES_AT);
        // if (getCurrentDate() < TOKEN_EXPIRED_TIME) {
        //   try {
        //     store.dispatch({type: GET_REFRESH_TOKEN});
        //     const newAccessToken = await Storage.getItem(ACCESS_TOKEN);
        //     config.headers.Authorization = `Bearer ${newAccessToken}`;
        //     return instance(config);
        //   } catch (err) {
        //     return Promise.reject(error);
        //   }
        // } else {
        //   store.dispatch({
        //     type: SHOW_ALERT,
        //     customProps: {
        //       message: 'Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại tài khoản',
        //     },
        //     cancelable: false,
        //     onSubmit: () => {
        //       store.dispatch({type: _onSuccess(LOGOUT_ACCOUNT)});
        //       Storage.removeItem(ACCESS_TOKEN);
        //       Storage.removeItem(REFRESH_TOKEN);
        //       Storage.removeItem(REFRESH_EXPIRES_AT);
        //       FastImage.clearMemoryCache();
        //       FastImage.clearDiskCache();
        //       sleep(500).then(() => reset(routes.LOGIN_SCREEN));
        //     },
        //   });
        // }

        store.dispatch({
          type: SHOW_ALERT,
          customProps: {
            message: 'Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại tài khoản',
          },
          cancelable: false,
          onSubmit: () => {
            Storage.removeItem(ACCESS_TOKEN);
            Storage.removeItem(REFRESH_TOKEN);
            Storage.removeItem(REFRESH_EXPIRES_AT);
            FastImage.clearMemoryCache();
            FastImage.clearDiskCache();
            sleep(500).then(() => reset(routes.LOGIN_SCREEN));
          },
        });
      }

      if (__DEV__ && DEBUG_LOGGING_ENABLED) {
        console.log(`%c[RESPONSE ERROR] ${config.url}`, 'color: #EF4444; font-weight: bold', error.response);
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

const getRequestBody = (config: InternalAxiosRequestConfig) => {
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
