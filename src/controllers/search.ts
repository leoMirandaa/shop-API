import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";
import { Types } from "mongoose";
import UserModel from "../models/user";
import CategoryModel from "../models/category";
import ProductModel from "../models/product";

const admittedCollections = [
  "users",
  "categories",
  "products",
  "roles",
  "findProductsByCategoryId",
];

const searchUsers = async (term = "", res: Response) => {
  const isMongoId = Types.ObjectId.isValid(term);

  if (isMongoId) {
    const user = await UserModel.findById(term);
    return res.json({
      results: user ? [user] : [],
    });
  }

  const regex = new RegExp(term, "i");
  const users = await UserModel.find({
    $or: [{ name: regex }, { email: regex }],
    $and: [{ status: true }],
  });
  res.json({
    results: users,
  });
};

const searchCategories = async (term = "", res: Response) => {
  const isMongoId = Types.ObjectId.isValid(term);

  if (isMongoId) {
    const category = await CategoryModel.findById(term);
    return res.json({
      results: category ? [category] : [],
    });
  }

  const regex = new RegExp(term, "i");
  const categories = await CategoryModel.find({ name: regex, status: true });
  res.json({ results: categories });
};

const searchProducts = async (term = "", res: Response) => {
  const isMongoId = Types.ObjectId.isValid(term);

  if (isMongoId) {
    const product = await ProductModel.findById(term).populate("category");
    return res.json({
      results: product ? [product] : [],
    });
  }

  const regex = new RegExp(term, "i");
  const products = await ProductModel.find({ name: regex, status: true });
  res.json({ results: products });
};

const findProductsByCategoryId = async (term = " ", res: Response) => {
  const isMongoId = Types.ObjectId.isValid(term);

  if (!isMongoId) {
    return res.status(400).json({
      msg: "Not valid Category ID",
    });
  }

  const products = await ProductModel.find({
    category: term,
  }).populate("category", "name");

  res.json({
    results: products,
  });
};

const search = ({ params }: Request, res: Response) => {
  const { collection, term } = params;

  if (!admittedCollections.includes(collection)) {
    return res.status(400).json({
      msg: `${collection} is not admitted collection`,
    });
  }

  switch (collection) {
    case "users":
      searchUsers(term, res);
      break;

    case "categories":
      searchCategories(term, res);
      break;

    case "products":
      searchProducts(term, res);
      break;

    case "findProductsByCategoryId":
      findProductsByCategoryId(term, res);
      break;

    //todo: find products by category

    default:
      res.status(500).json({
        msg: "This search doesnt exists",
      });
  }
};

export { search };
