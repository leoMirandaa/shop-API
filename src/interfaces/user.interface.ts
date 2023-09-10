export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: Address;
  phone: string;
  // role: "ADMIN_ROLE" | "USER_ROLE";
  role: UserType;
  status: boolean;
}

export enum UserType {
  USER = 1,
  ADMIN = 2,
}

export interface Address {
  street: string;
  country: string;
  state: string;
  city: string;
  zip: string;
}
