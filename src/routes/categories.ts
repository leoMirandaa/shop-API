import { Router } from "express";
import {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} from "../controllers/categories";

const router = Router();
router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/", updateItem);
router.delete("", deleteItem);

export default router;
