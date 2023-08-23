import { Schema, model } from "mongoose";
import { Product, boardType } from "../interfaces/product.interface";

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
    category: {
      // enum: boardType,
      type: Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
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
