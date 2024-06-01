import {ToastMessage} from '@components';
import i18n from '@i18n';
import MainContainer from '@navigation';
import ActionModal from '@screens/Common/OnTopButton.ActionModal';
import MoodNowModal from '@screens/Common/OnTopButton.MoodNowModal';
import store, {persistor} from '@store';
import { AppConfig } from '@utils/constants';
import {isIos} from '@utils/helper';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {UIManager} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

console.log('Running in', AppConfig.ENVIRONMENT,'mode');
if (__DEV__) console.log('Running with development server');

if (!isIos && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainContainer />
            <ToastMessage position="top" />
            <ActionModal />
            <MoodNowModal />
          </PersistGate>
        </ReduxProvider>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default App;
