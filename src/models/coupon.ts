import { Schema, model } from "mongoose";
import { Coupon } from "../interfaces/coupon.interface";

const CouponSchema = new Schema<Coupon>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    discount: {
      type: Number,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CouponModel = model("Coupon", CouponSchema);
export default CouponModel;
