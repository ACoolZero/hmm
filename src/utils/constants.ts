import Config from 'react-native-config';
// Config.NODE_ENV = 'development'; // Manually set NODE_ENV in case you can't use .env
console.log('Config:', Config);

export const ENVIRONMENT = {
  development: 'development',
  test: 'test',
  production: 'production',
} as const;

export const BASE_URL = {
  development: 'http://172.21.41.251:3000',
  test: 'http://172.21.41.251:3000', // 'https://hmm-beta.reliable.vn:3000',
  production: 'https://mm.reliable.io.vn/api/v1',
} as const;

export const WS_BASE_URL = {
  development: 'http://172.21.41.251:3000',
  test: 'http://172.21.41.251:3000',
  production: 'https://mm.reliable.io.vn' // Note: There is a path configured in service Socket for suffix
} as const;

export const WS_BASE_PATH = {
  development: '/socket.io/',
  test: '/socket.io/',
  production: '/api/v1/socket.io/' // Note: There is a path configured in service Socket for suffix
} as const;

// 'https://mm.reliable.io.vn/api/v1','http://217.76.54.196:3000',
export const DEBUG_LOGGING_ENABLED = {
  development: true,
  test: false,
  production: true,//false,
} as const;

/**
 * @todo use for storage
 */
export const USERNAME = 'USERNAME';
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_EXPIRES_AT = 'REFRESH_EXPIRES_AT';

/**
 * @todo use for General
 */
export const ITEM_LIMIT_PER_PAGE = 10;

export const PHONE_REGEX = /^[+ 0-9]*$/g;

// Add client IDs from .env
export const GOOGLE_WEB_CLIENT_ID = Config.GOOGLE_WEB_CLIENT_ID;
export const GOOGLE_ANDROID_CLIENT_ID = Config.GOOGLE_ANDROID_CLIENT_ID;
export const GOOGLE_IOS_CLIENT_ID = Config.GOOGLE_IOS_CLIENT_ID;


export const getEnvironment = (): keyof typeof ENVIRONMENT => {
  switch (Config.NODE_ENV) {
    case 'development':
      return 'development';
    case 'test':
      return 'test';
    case 'production':
    default:
      return 'production';
  }
};

/**
 * @todo use for General App Config that changable
 */
export const AVATAR_DEFAULT = `${BASE_URL[getEnvironment()]}/file/image/common/default-profile-image.png`;

export const AppConfig = {
  ENVIRONMENT: getEnvironment(),
  BASE_URL: BASE_URL[getEnvironment()],
  WS_BASE_URL: WS_BASE_URL[getEnvironment()],
  WS_BASE_PATH: WS_BASE_PATH[getEnvironment()],
  DEBUG_LOGGING_ENABLED: DEBUG_LOGGING_ENABLED[getEnvironment()],
  AVATAR_DEFAULT,
};



/**
 * @todo use for HTTP status code
 */
export const TOKEN_EXPIRED = 401;
export const INTERNAL_SERVER_ERROR = 500;
export const NOT_FOUND = 404;
