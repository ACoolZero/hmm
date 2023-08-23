import {object, string} from 'yup';

export const validation = object().shape({
  dob: string().required(),
});
