import { Request, Response, NextFunction } from "express";

import { check } from "express-validator";
import { validateResult } from "../utils/validate.handle";
import { categoryIdExists } from "./db-validators";

const method = (req: Request, res: Response, next: NextFunction) => {
  validateResult(req, res, next);
};

const validateGet = [check("id").isMongoId().custom(categoryIdExists), method];

const validateCreate = [check("name").exists().not().isEmpty(), method];

const validateUpdate = [
  check("id").isMongoId(),
  check("id").custom(categoryIdExists),
  method,
];

const validateDelete = [
  check("id").isMongoId(),
  check("id").custom(categoryIdExists),
  method,
];
export { validateGet, validateCreate, validateUpdate, validateDelete };
