import { Router } from "express";
import { loginUser } from "../controllers/auth";

const router = Router();
router.post("/", loginUser);

export default router;
