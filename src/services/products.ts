import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/product";

const getProducts = async () => {
  const query = { status: true };

  const products = await ProductModel.find(query).populate("category", "name");
  return products;
};

const getProduct = async (id: string) => {
  const product = await ProductModel.findById(id);
  return product;
};

const createProduct = async (data: Product) => {
  const product = await ProductModel.create(data);
  return product;
};

const updateProduct = async (id: string, data: Product) => {
  const product = await ProductModel.findByIdAndUpdate(id, data, { new: true });
  return product;
};

const deleteProduct = async (id: string) => {
  const product = ProductModel.findByIdAndUpdate(
    id,
    { status: false },
    { new: true }
  );
  return product;
};

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
