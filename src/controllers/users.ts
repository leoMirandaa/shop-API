import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";

import usersService from "../services/users";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_USERS", error);
  }
};

const getUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const user = await usersService.getUser(id);
    res.status(200).json(user);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_USER", error);
  }
};

const createUser = async ({ body }: Request, res: Response) => {
  const user = await usersService.createUser(body);
  res.status(200).json(user);
};

const updateUser = async ({ body, params }: Request, res: Response) => {
  try {
    const { id } = params;
    const user = await usersService.updateUser(id, body);
    res.status(200).json(user);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_USER", error);
  }
};

const deleteUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const user = await usersService.deleteUser(id);
    res.status(200).json(user);
  } catch (error) {
    handleHttpError(res, "ERORR_DELETE_USER", error);
  }
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
