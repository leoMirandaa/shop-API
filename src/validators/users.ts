import { Request, Response, NextFunction } from "express";

import { check } from "express-validator";
import { validateResult } from "../utils/validate.handle";

const validateCreate = [
  check("name")
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 10 })
    .custom((value, { req }) => {
      if (value.length < 8) {
        throw new Error("min length 8");
      }
      return true;
    }),
  check("email").exists().isEmail(),
  check("password").not().isEmpty(),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export { validateCreate };
