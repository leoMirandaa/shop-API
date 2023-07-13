import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt } from "../utils/bcrypt.handle";

const getUsers = async () => {
  const query = { status: true };
  const users = await UserModel.find(query);
  return users;
};

const getUser = async (id: string) => {
  //todo //const query = { status: true };
  const user = await UserModel.findById(id);
  return user;
};

const createUser = async ({ name, email, password }: User) => {
  const userExists = await UserModel.findOne({ email });

  console.log("userExists ", userExists);
  if (userExists) return "USER_ALREADY_EXISTS";

  const hashedPassword = await encrypt(password);
  const user = await UserModel.create({
    name,
    email,
    password: hashedPassword,
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
