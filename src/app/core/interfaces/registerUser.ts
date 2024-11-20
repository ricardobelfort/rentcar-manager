export interface registerUser {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface User extends registerUser {
  id: number;
}
