import {ToastMessage} from '@components';
import i18n from '@i18n';
import MainContainer from '@navigation';
import store, {persistor} from '@store';
import {isIos} from '@utils/helper';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {UIManager} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

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
            <FlashMessage position="top" />
            <ToastMessage position="bottom" />
          </PersistGate>
        </ReduxProvider>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default App;
