import { Schema, model } from "mongoose";
import { GenderType, Product, SizeType } from "../interfaces/product.interface";

const ProductSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    status: {
      type: Boolean,
      default: true,
    },
    category: {
      // shirts, pants, hoodies, hats
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    size: {
      type: String,
      enum: SizeType,
      required: true,
    },
    gender: {
      type: String,
      enum: GenderType,
      required: true,
    },

    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = model("Product", ProductSchema);
export default ProductModel;
