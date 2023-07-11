import { Category } from "../interfaces/category.interface";
import CategoryModel from "../models/category";

const getCategories = async () => {
  const categories = await CategoryModel.find({});
  return categories;
};

const insertCategory = async (item: Category) => {
  const responseItem = await CategoryModel.create(item);
  return responseItem;
};

export { getCategories, insertCategory };
