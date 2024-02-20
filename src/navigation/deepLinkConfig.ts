import routes from './routes';

const linking = {
  prefixes: ['moments://'],
  config: {
    screens: {
      [routes.BOTTOM_TAB]: {
        screens: {
          [routes.BOTTOM_HOME_STACK]: {
            initialRouteName: routes.HOME_SCREEN,
            screens: {
              [routes.MOMENT_DETAILS_SCREEN]: '/:momentId',
            },
          },
        },
      },
    },
  },
};

export default linking;
