import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users";

const router = Router();
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", checkJWT, createUser);
router.put("/:id", checkJWT, updateUser);
router.delete("/:id", checkJWT, deleteUser);

export default router;
