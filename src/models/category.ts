import { Schema, model } from "mongoose";
import { Category } from "../interfaces/category.interface";

const CategorySchema = new Schema<Category>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
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

const CategoryModel = model("Category", CategorySchema);
export default CategoryModel;
