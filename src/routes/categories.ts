import { Router } from "express";
import {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories";

const router = Router();
router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
