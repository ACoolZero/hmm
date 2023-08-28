import i18n from '@i18n';
import {object, ref, string} from 'yup';

export const validation = object().shape({
  password: string().required(i18n.t('validate.password_empty')).min(8, i18n.t('validate.password_min_8')),
  retypePassword: string()
    .required(i18n.t('validate.password_empty'))
    .oneOf([ref('password'), ''], i18n.t('validate.retypePassword_not_same')),
});
