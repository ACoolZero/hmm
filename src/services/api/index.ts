import {reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import store from '@store';
import {GET_REFRESH_TOKEN, LOGOUT_ACCOUNT, SHOW_ALERT, _onSuccess} from '@store/actions';
import {
  ACCESS_TOKEN,
  REFRESH_EXPIRES_AT,
  REFRESH_TOKEN,
  TOKEN_EXPIRED,
  AppConfig,
} from '@utils/constants';
import {getCurrentDate, sleep} from '@utils/date';
import Storage from '@utils/storage';
import axios, {AxiosRequestConfig, InternalAxiosRequestConfig} from 'axios';
import FastImage from 'react-native-fast-image';


// function createCancelTokenSource() {
//   return axios.CancelToken.source();
// }

const getAxiosInstance = async () => {
  const instance = axios.create({
    baseURL: AppConfig.BASE_URL,
    headers: {},
    // cancelToken: cancelSource.token,
  });

  let refreshTokenPromise: Promise<unknown> | null = null;

  // Function to refresh access token
  async function refreshAccessToken() {
    // Check if token refresh is already in progress
    if (!refreshTokenPromise) {
      // Create a new promise for token refresh
      refreshTokenPromise = new Promise(async (resolve, reject) => {
        try {
          // Perform token refresh logic here
          const TOKEN_EXPIRED_TIME = await Storage.getItem(REFRESH_EXPIRES_AT);
          if (getCurrentDate() < TOKEN_EXPIRED_TIME) {
            store.dispatch({type: GET_REFRESH_TOKEN});
            const newAccessToken = await Storage.getItem(ACCESS_TOKEN);
            if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
              console.debug("ACCESS_TOKEN: ", newAccessToken);
            }
          
            resolve(newAccessToken);
          } else {
            return reject("Refresh token expired. You should login.");
          }
        } catch (error) {
          console.error("Refresh the access token failed");
          return reject(error);
        } finally {
          // Reset the promise after completion
          refreshTokenPromise = null;
        }
      });
    }
    return refreshTokenPromise;
  }

  instance.interceptors.request.use(
    async config => {
      const data = getRequestBody(config);

      if (__DEV__) {
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
      
      // Associate each request with a new cancel token source
      // config.cancelToken = createCancelTokenSource().token;

      return {...config, data};
    },
    error => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    async response => {
      if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
        console.log(`%c[RESPONSE] ${response.config.url}`, 'color: #FBBF24; font-weight: bold', response);
      }

      return response.data;
    },
    async response_error => {
      const statusCode = response_error?.response?.status;
      const config = response_error.config;
      if (statusCode === TOKEN_EXPIRED) {
        // console.log("Cancelled all request, and will try refreshing the access token");
        // cancelAllRequests();

        try {
          // Wait for token refresh if needed
          const newAccessToken = await refreshAccessToken();
          // Retry the original request with the new token
          if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
            console.debug("instance(config):", newAccessToken);
          }
          config.headers.Authorization = `Bearer ${newAccessToken}`;

          // return config;
          return axios(config);
        } catch (error) {
          // Handle token refresh error
          console.error("Refresh the access token failed");
          // throw error;
          // NOTE: Use in dev when needed
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

        // NOTE: old processing flow that make repeated requests problem
        // const TOKEN_EXPIRED_TIME = await Storage.getItem(REFRESH_EXPIRES_AT);
        // if (getCurrentDate() < TOKEN_EXPIRED_TIME) {
        //   try {
        //     console.debug("TOKEN_EXPIRED_TIME still in range")
        //     store.dispatch({type: GET_REFRESH_TOKEN});
        //     const newAccessToken = await Storage.getItem(ACCESS_TOKEN);
        //     console.debug("ACCESS_TOKEN: ", newAccessToken);
        //     config.headers.Authorization = `Bearer ${newAccessToken}`;
        //     console.debug("HEADER ACCESS_TOKEN: ", config.headers);
        //     console.debug("instance(config):", config);
        //     return instance(config);
        //   } catch (error) {
        //     console.error("Refresh the access token failed");
        //     return Promise.reject(response_error);
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

        
      }

      if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
        console.log(`%c[RESPONSE ERROR] ${config.url}`, 'color: #EF4444; font-weight: bold', response_error.response);
      }

      return Promise.reject(response_error);
    },
  );

  return instance;
};

// // Function to cancel all ongoing requests
// function cancelAllRequests() {
//   // Generate a new cancel token source
//   const cancelSource = createCancelTokenSource();
//   // Cancel all requests associated with the cancel token
//   cancelSource.cancel('All requests cancelled due to 401 response');
// }

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
