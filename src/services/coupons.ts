import { Coupon } from "../interfaces/coupon.interface";
import CouponModel from "../models/coupon";

const getCoupons = async () => {
  const query = { status: true };
  const response = await CouponModel.find(query);

  return response;
};

const getCoupon = async (id: string) => {
  const coupon = await CouponModel.findById(id);
  return coupon;
};

const createCoupon = async (data: Coupon) => {
  console.log("DATA:", data);
  const { name } = data;
  const couponExists = await CouponModel.findOne({ name });
  if (couponExists) return "COUPON_ALREADY_EXISTS";

  const coupon = await CouponModel.create(data);
  return coupon;
};

const updateCoupon = async (id: string, data: Coupon) => {
  const coupon = await CouponModel.findByIdAndUpdate(id, data, { new: true });
  return coupon;
};

const deleteCoupon = async (id: string) => {
  const coupon = await CouponModel.findByIdAndUpdate(
    id,
    { status: false },
    { new: true }
  );
  return coupon;
};

export default {
  getCoupons,
  getCoupon,
  createCoupon,
  updateCoupon,
  deleteCoupon,
};
