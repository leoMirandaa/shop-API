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
router.post("/", checkJWT, validateCreate, createUser);
router.put("/:id", checkJWT, validateUpdate, updateUser);
router.delete("/:id", checkJWT, validateDelete, deleteUser);

export default router;
