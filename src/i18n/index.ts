import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './resources/en.json';
import vi from './resources/vi.json';

/**
 * @fix issue: Type 'null' is not assignable to type 'string | undefined'.
 */
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'vi',
  fallbackLng: 'vi',
  returnNull: false,
  resources: {
    vi: {translation: vi},
    en: {translation: en},
  },
});

export default i18n;
