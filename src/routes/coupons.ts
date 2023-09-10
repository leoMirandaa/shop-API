import { Router } from "express";
import {
  createCoupon,
  deleteCoupon,
  getCoupon,
  getCoupons,
  updateCoupon,
} from "../controllers/coupons";
import {
  validateCreate,
  validateDelete,
  validateGet,
  validateUpdate,
} from "../validators/coupons";
const router = Router();

router.get("/", getCoupons);
router.get("/:id", validateGet, getCoupon);
router.post("/", validateCreate, createCoupon);
router.put("/:id", validateUpdate, updateCoupon);
router.delete("/:id", validateDelete, deleteCoupon);

export default router;
