export interface RegisterPayload {
  email: string;
  fullName: string;
  password: string;
  dob: string;
  gender: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
