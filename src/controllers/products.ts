import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary.handle";
import { handleHttpError } from "../utils/error.handle";
import productsService from "../services/products";
import { Product } from "../interfaces/product.interface";

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

const createProduct = async ({ body, files }: Request, res: Response) => {
  const { name, description, price, img, category, size, gender }: Product =
    body;
  const { tempFilePath }: any = files?.image;

  try {
    const result = await cloudinary.uploader.upload(tempFilePath, {
      folder: "products",
    });

    const product = await productsService.createProduct({
      name,
      description,
      price,
      img: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      category,
      size,
      gender,
    });
    res.status(201).json(product);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_PRODUCT", error);
  }
};

const updateProduct = async ({ body, params }: Request, res: Response) => {
  console.log("00 ", body, params.id);
  try {
    const { id } = params;
    const product = await productsService.updateProduct(id, body);
    res.status(200).json(product);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_PRODUCT", error);
  }
};

const deleteProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const product = await productsService.deleteProduct(id);
    res.status(200).json(product);
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_PRODUCT", error);
  }
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
