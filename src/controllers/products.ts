import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";

import productsService from "../services/products";

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productsService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_PRODUCTS", error);
  }
};

const getProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const product = await productsService.getProduct(id);
    res.status(200).json(product);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_PRODUCT", error);
  }
};

const createProduct = async ({ body }: Request, res: Response) => {
  try {
    const product = await productsService.createProduct(body);
    res.status(200).json(product);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_PRODUCT", error);
  }
};

export { getProducts, getProduct, createProduct };
