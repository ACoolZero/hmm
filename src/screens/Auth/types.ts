export interface IUser {
  email: string;
  id: string;
  fullName: string;
  role: string;
  accessToken: string;
  refreshToken: string;
}
export interface RegisterPayload {
  email: string;
  fullName: string;
  password: string;
  dob: string;
  gender: string;
}

export interface LoginPayload {
  email: string;
  password?: string;
}

export interface ForgotPasswordPayload {
  email: string;
  type: 'FORGOT_PASSWORD';
}

export type GenderType = 'MALE' | 'FEMALE';

export interface UpdateUserPayload {
  fullName?: string;
  avatar?: string;
  phoneNumber?: string;
  areaCode?: string;
  slogan?: string;
  gender?: GenderType;
}
