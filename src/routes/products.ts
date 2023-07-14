import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products";

const router = Router();
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", checkJWT, createProduct);
router.put("/:id", checkJWT, updateProduct);
router.delete("/:id", checkJWT, deleteProduct);

export default router;
