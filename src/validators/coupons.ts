import { Request, Response, NextFunction } from "express";

import { check } from "express-validator";
import { validateResult } from "../utils/validate.handle";
import {
  couponExists,
  couponIdExists,
  couponToChangeExists,
} from "./db-validators";

const method = (req: Request, res: Response, next: NextFunction) => {
  validateResult(req, res, next);
};

const validateGet = [check("id").isMongoId().custom(couponIdExists), method];

const validateCreate = [
  check("name").exists().not().isEmpty().custom(couponExists),
  method,
];

const validateUpdate = [
  check("id").isMongoId(),
  check("id").custom(couponIdExists),
  check("id", "name").custom(couponToChangeExists),
  method,
];

const validateDelete = [
  check("id").isMongoId(),
  check("id").custom(couponIdExists),
  method,
];

export { validateGet, validateCreate, validateUpdate, validateDelete };
