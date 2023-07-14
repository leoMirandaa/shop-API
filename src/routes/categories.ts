import { Router } from "express";
import { checkJWT } from "../middleware/session";
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
router.post("/", checkJWT, createCategory);
router.put("/:id", checkJWT, updateCategory);
router.delete("/:id", checkJWT, deleteCategory);

export default router;
