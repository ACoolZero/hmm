import {useTranslation} from 'react-i18next';

const useLocale = () => {
  const {t, i18n} = useTranslation();

  return {t, i18n};
};

export default useLocale;
