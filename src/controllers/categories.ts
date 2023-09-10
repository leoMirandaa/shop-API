import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";

import categoriesService from "../services/categories";

const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoriesService.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_CATEGORIES", error);
  }
};

const getCategory = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const category = await categoriesService.getCategory(id);
    res.status(200).json(category);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_CATEGORY", error);
  }
};

const createCategory = async ({ body }: Request, res: Response) => {
  try {
    const category = await categoriesService.createCategory(body);

    if (category === "CATEGORY_ALREADY_EXISTS") {
      return res.status(400).json({ msg: "CATEGORY_ALREADY_EXISTS" });
    }

    res.status(201).json(category);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_CATEGORY", error);
  }
};

const updateCategory = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const category = await categoriesService.updateCategory(id, body);
    res.status(200).json(category);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_CATEGORY", error);
  }
};

const deleteCategory = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const category = await categoriesService.deleteCategory(id);
    res.status(200).json(category);
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_CATEGORY", error);
  }
};

export {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
