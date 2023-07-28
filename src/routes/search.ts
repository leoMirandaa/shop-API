import { Router } from "express";
import { search } from "../controllers/search";

const router = Router();
router.get("/:collection/:term", search);

export default router;
