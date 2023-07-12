export interface User {
  name: string;
  email: string;
  password: string;
  role: "ADMIN_ROLE" | "USER_ROLE";
  status: boolean;
}
