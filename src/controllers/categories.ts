import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";
import { getCategories, insertCategory } from "../services/categories";

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCategories();
    res.send(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_CATEGORIES", error);
  }
};

const getItem = (req: Request, res: Response) => {
  try {
    res.json({ msg: "category[GET]" });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_CATEGORY", error);
  }
};

const createItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertCategory(body);
    res.send(response);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_CATEGORY", error);
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
    res.json({ msg: "Category[PUT]" });
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_CATEGORY", error);
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
    res.json({ msg: "category[DELETE]" });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_CATEGORY", error);
  }
};

export { getItems, getItem, createItem, updateItem, deleteItem };
