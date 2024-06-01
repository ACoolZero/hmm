import Config from 'react-native-config';
Config.NODE_ENV = 'development'; // Manually set NODE_ENV in case you can't use .env
console.log('Config:', Config);

export const ENVIRONMENT = {
  development: 'development',
  test: 'test',
  production: 'production',
} as const;

export const BASE_URL = {
  development: 'http://172.21.41.251:3000',
  test: 'http://172.21.41.251:3000', // 'https://hmm-beta.reliable.vn:3000',
  production: 'http://172.21.41.251:3000', // https://hmm.reliable.vn:3000',
} as const;

export const DEBUG_LOGGING_ENABLED = {
  development: true,
  test: true,
  production: false,
} as const;

export const TOKEN_EXPIRED = 401;
export const INTERNAL_SERVER_ERROR = 500;
export const NOT_FOUND = 404;

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

export const AVATAR_DEFAULT = 'https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg';


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

export const AppConfig = {
  ENVIRONMENT: getEnvironment(),
  BASE_URL: BASE_URL[getEnvironment()],
  DEBUG_LOGGING_ENABLED: DEBUG_LOGGING_ENABLED[getEnvironment()],
  AVATAR_DEFAULT,
};