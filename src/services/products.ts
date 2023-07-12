import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/product";

const getProducts = async () => {
  const query = { status: true };

  const products = await ProductModel.find(query);
  return products;
};

const getProduct = async (id: string) => {
  const product = await ProductModel.findById(id);
  return product;
};

const createProduct = async (item: Product) => {
  const product = await ProductModel.create(item);
  return product;
};

export default { getProducts, getProduct, createProduct };
