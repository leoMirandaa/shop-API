import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt } from "../utils/bcrypt.handle";

const getUsers = async () => {
  const query = { status: true };
  const users = await UserModel.find(query).select("-password");
  return users;
};

const getUser = async (id: string) => {
  //todo //const query = { status: true };
  const user = await UserModel.findById(id).select("-password");
  return user;
};

const createUser = async ({
  firstName,
  lastName,
  email,
  password,
  phone,
  address,
  role,
}: User) => {
  const userExists = await UserModel.findOne({ email });

  if (userExists) return "EMAIL_ALREADY_EXISTS";

  const hashedPassword = await encrypt(password);
  const user = await UserModel.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phone,
    address,
    role,
  });
  return user;
};

const updateUser = async (id: string, data: User) => {
  //todo hash password
  const user = await UserModel.findByIdAndUpdate(id, data, { new: true });
  return user;
};

const deleteUser = async (id: string) => {
  const user = await UserModel.findByIdAndUpdate(
    id,
    { status: false },
    { new: true }
  );
  return user;
};

export default { getUsers, getUser, createUser, updateUser, deleteUser };
