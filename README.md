## Resource Management System

## Architecture

#### Core

- [React Native](https://reactnative.dev) (v0.72.0) application.
- [React Navigation](https://reactnavigation.org)(v6) to handle in-app navigation.
- [Redux](https://redux.js.org) (v4.2.1) to manage application state.
- [Redux Saga](https://redux-saga.js.org) (v1.2.3) to make application side effects.
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v6.0.0) to persist the Redux state.
- [Axios](https://github.com/axios/axios) (v1.4.0) to make API calls.

#### Utilities

- [Firebase](https://rnfirebase.io) (v14.7.0) for necessary services. (coming soon)
- [Codepush](https://github.com/microsoft/react-native-code-push) (v7.0.4) to immediately update application. (coming soon)
- [I18next](https://www.i18next.com) (v22.5.0) for multi-language support.
- [Detox](https://github.com/wix/Detox) (v19.7.1) for end-to-end testing. (coming soon)

#### Development Tools

- [Prettier](https://prettier.io/) for linting.
- [Flipper](https://fbflipper.com/) for debugging.

## Directory Structure

```bash
.
├── android
├── ios
├── configs                         # manages environment variables
├── e2e                             # handle automation test
├── patches                         # contains overrided package
├── src                             # source code
│   ├── assets                      # contains assets (image, lottie, font, ...)
│   ├── components                  # contains reusable components
│   ├── hooks                       # contains custom hooks
│   ├── i18n                        # support multiple languages
│   ├── navigation                  # react navigation navigators
│   ├── screens                     # all pplication's screens
│   │  ├── Auth                     # contains authentication screens
│   │  ├── Bottom                   # contains bottom tab screens
│   │  ├── Common                   # contains common screens
│   │  ├── __DEV__                  # contains environment setting screens
│   ├── services                    # application services (api, socket, notification, ...)
│   ├── store                       # manages aplication's state
│   ├── theme                       # base styles for the application
│   ├── utils                       # contains helper file (function, constant, storage, ...)
│   ├── App.tsx                     # contains file for all layouts
├── index.js
├── package.json
...
```

## Quick Start

#### Step 1:

- Run "yarn" to install dependencies.

#### Step 2:

- Run "yarn pins" to install Pods.

#### Step 3:

- Run app: "yarn android" or "yarn ios".
