// todo : validate role on each necesary method
import { Request, Response, NextFunction } from "express";

import { check } from "express-validator";
import { validateResult } from "../utils/validate.handle";
import { emailExists, userIdExists } from "./db-validators";

const method = (req: Request, res: Response, next: NextFunction) => {
  validateResult(req, res, next);
};

const validateGet = [check("id").isMongoId().custom(userIdExists), method];

const validateCreate = [
  check("firstName")
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 20 })
    .custom((value, { req }) => {
      if (value.length < 2) {
        throw new Error("min length 8");
      }
      return true;
    }),
  check("lastName")
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 20 })
    .custom((value, { req }) => {
      if (value.length < 2) {
        throw new Error("min length 8");
      }
      return true;
    }),
  check("email").exists().isEmail().custom(emailExists),
  check("password").not().isEmpty(),
  method,
];

const validateUpdate = [
  check("id").isMongoId(),
  check("id").custom(userIdExists),
  method,
];

const validateDelete = [
  check("id").isMongoId(),
  check("id").custom(userIdExists),
  method,
];

export { validateGet, validateCreate, validateUpdate, validateDelete };
