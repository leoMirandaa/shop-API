import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  validateCreate,
  validateDelete,
  validateGet,
  validateUpdate,
} from "../validators/users";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users";

const router = Router();
router.get("/", getUsers);
router.get("/:id", validateGet, getUser);
router.post("/", validateCreate, checkJWT, createUser);
router.put("/:id", validateUpdate, checkJWT, updateUser);
router.delete("/:id", validateDelete, checkJWT, deleteUser);

export default router;
