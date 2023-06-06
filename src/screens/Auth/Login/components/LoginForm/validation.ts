import i18n from '@i18n';
import {object, string} from 'yup';

export const validation = object().shape({
  username: string().required(i18n.t('validate.username_empty')),
  password: string().required(i18n.t('validate.password_empty')),
});
