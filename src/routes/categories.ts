import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories";
import {
  validateCreate,
  validateDelete,
  validateGet,
  validateUpdate,
} from "../validators/categories";

const router = Router();
router.get("/", getCategories);
router.get("/:id", validateGet, getCategory);
router.post("/", checkJWT, validateCreate, createCategory);
router.put("/:id", checkJWT, validateUpdate, updateCategory);
router.delete("/:id", checkJWT, validateDelete, deleteCategory);

export default router;
