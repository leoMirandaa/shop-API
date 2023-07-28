import { Category } from "../interfaces/category.interface";
import CategoryModel from "../models/category";

const getCategories = async () => {
  const query = { status: true };

  // const categories = await CategoryModel.find(query).limit(2);
  const categories = await CategoryModel.find(query);
  return categories;
};

const getCategory = async (id: string) => {
  const category = await CategoryModel.findById(id);
  return category;
};

const createCategory = async (data: Category) => {
  const category = await CategoryModel.create(data);
  return category;
};

const updateCategory = async (id: string, data: Category) => {
  const category = CategoryModel.findByIdAndUpdate(id, data, { new: true });
  return category;
};

const deleteCategory = async (id: string) => {
  const category = await CategoryModel.findByIdAndUpdate(
    id,
    { status: false },
    { new: true }
  );
  return category;
};

export default {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
