import i18n from '@i18n';
import {object, string} from 'yup';

export const validation = object().shape({
  fullName: string().required(i18n.t('validate.fullName_empty')),
  email: string().required(i18n.t('validate.email_empty')).email(i18n.t('validate.wrong_email')),
});
