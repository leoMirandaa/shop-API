import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products";
import {
  validateCreate,
  validateDelete,
  validateGet,
  validateUpdate,
} from "../validators/products";

const router = Router();
router.get("/", getProducts);
router.get("/:id", validateGet, getProduct);
router.post("/", checkJWT, validateCreate, createProduct);
router.put("/:id", checkJWT, validateUpdate, updateProduct);
router.delete("/:id", checkJWT, validateDelete, deleteProduct);

export default router;
