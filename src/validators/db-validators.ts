import { User } from "../interfaces/user.interface";
import CategoryModel from "../models/category";
import CouponModel from "../models/coupon";
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
    throw new Error(`${email} already exists`);
  }
};

const emailToChangeExists = async (id: string, data: any) => {
  let receivedEmail = data.req.body.email;

  const user = await UserModel.findById(id);

  if (receivedEmail !== user?.email) {
    return emailExists(receivedEmail);
  }
};

const categoryIdExists = async (id: string) => {
  const category = await CategoryModel.findById(id);
  if (!category) {
    throw new Error(`Category id: ${id} doesn't exist`);
  }
};

const categoryExists = async (categoryName: string) => {
  const category = await CategoryModel.findOne({ name: categoryName });

  if (category) {
    throw new Error(`${categoryName} already exists`);
  }
};

const categoryToChangeExists = async (id: string, data: any) => {
  let receivedCategory = data.req.body.name;

  const category = await CategoryModel.findById(id);

  if (receivedCategory !== category?.name) {
    return categoryExists(receivedCategory);
  }
};

const productIdExists = async (id: string) => {
  const product = await ProductModel.findById(id);
  if (!product) {
    throw new Error(`Product id: ${id} doesn't exist`);
  }
};

const couponIdExists = async (id: string) => {
  const coupon = await CouponModel.findById(id);
  if (!coupon) {
    throw new Error(`Coupon id: ${id} doesn't exist`);
  }
};

const couponExists = async (couponName: string) => {
  const coupon = await CouponModel.findOne({ name: couponName });

  if (coupon) {
    throw new Error(`${couponName} already exists`);
  }
};

const couponToChangeExists = async (id: string, data: any) => {
  let receivedCoupon = data.req.body.name;

  const coupon = await CouponModel.findById(id);

  if (receivedCoupon !== coupon?.name) {
    return couponExists(receivedCoupon);
  }
};

export {
  emailExists,
  emailToChangeExists,
  userIdExists,
  categoryIdExists,
  categoryExists,
  categoryToChangeExists,
  productIdExists,
  couponIdExists,
  couponExists,
  couponToChangeExists,
};
