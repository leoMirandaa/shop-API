import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

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

const createUser = async (data: User) => {
  //todo: encrypt password before save it
  const user = await UserModel.create(data);
  return user;
};

const updateUser = async (id: string, data: User) => {
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
