export interface User {
  name: string;
  email: string;
  password: string;
  address: Address;
  phone: string;
  role: "ADMIN_ROLE" | "USER_ROLE";
  status: boolean;
}

export interface Address {
  street: string;
  country: String;
  state: string;
  city: string;
  zip: string;
}
