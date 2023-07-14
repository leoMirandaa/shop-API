import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/user";
import { verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email });
  if (!user) return "USER_NOT_FOUND";

  const hashedPassword = user.password;
  const isValidPassword = await verify(password, hashedPassword);
  if (!isValidPassword) return "INCORRECT_PASSWORD";

  const token = await generateToken(user.email);
  const data = {
    token,
    user,
  };
  return data;
};

export default { loginUser };
