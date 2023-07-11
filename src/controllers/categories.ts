import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";

const getCategories = (req: Request, res: Response) => {
  try {
    res.json({ msg: "categories[GET]" });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_CATEGORIES");
  }
};

export { getCategories };
