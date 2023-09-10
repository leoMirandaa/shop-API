import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary.handle";
import { handleHttpError } from "../utils/error.handle";
import { Product } from "../interfaces/product.interface";
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

const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, category, img }: Product = req.body;

  // console.log("reqBody: ", req.body);
  console.log("reqHeaders: ", req?.files);

  const { tempFilePath }: any = req.files?.img;

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
    });
    res.status(201).json(product);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_PRODUCT", error);
  }
};

const updateProduct = async (
  { body, params, files }: Request,
  res: Response
) => {
  const { name, description, price, category, img }: Product = body;

  console.log("00 ", body, params.id);
  console.log("reqHeaders: ", files);

  if (files?.img) {
    console.log("Has image: ", files?.img);
    const { tempFilePath }: any = files?.img;
    try {
      const result = await cloudinary.uploader.upload(tempFilePath, {
        folder: "products",
      });
      const { id } = params;
      const product = await productsService.updateProduct(id, {
        name,
        description,
        price,
        ...(files?.img && {
          img: { public_id: result.public_id, url: result.secure_url },
        }),
        category,
      });
      res.status(200).json(product);
    } catch (error) {
      handleHttpError(res, "ERROR_UPDATE_PRODUCT", error);
    }
  } else {
    try {
      const { id } = params;
      const product = await productsService.updateProduct(id, {
        name,
        description,
        price,

        // img: {
        // public_id: result.public_id,
        // url: result.secure_url,
        // },
        category,
      });
      res.status(200).json(product);
    } catch (error) {
      handleHttpError(res, "ERROR_UPDATE_PRODUCT", error);
    }
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
