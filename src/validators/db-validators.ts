import CategoryModel from "../models/category";
import ProductModel from "../models/product";
import UserModel from "../models/user";

const userIdExists = async (id: string) => {
  //todo review when id is not mongoId format
  const user = await UserModel.findById(id);
  if (!user) {
    throw new Error(`user id: ${id} doesn't exist`);
  }
};

const emailExists = async (email: string) => {
  const userEmail = await UserModel.findOne({ email: email });
  if (userEmail) {
    throw new Error(`${email} already exist`);
  }
};

const categoryIdExists = async (id: string) => {
  const category = await CategoryModel.findById(id);
  if (!category) {
    throw new Error(`Category id: ${id} doesn't exist`);
  }
};

const productIdExists = async (id: string) => {
  const product = await ProductModel.findById(id);
  if (!product) {
    throw new Error(`Product id: ${id} doesn't exist`);
  }
};

export { emailExists, userIdExists, categoryIdExists, productIdExists };