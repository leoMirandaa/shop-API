import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validateResult = (req: Request, res: Response, next: NextFunction) => {
  try {
    // if not meet validation will throw error and show the validation
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(400).json(error);
  }
};

export { validateResult };
