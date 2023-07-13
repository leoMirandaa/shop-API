import { Request, Response } from "express";

import authService from "../services/auth";
import { handleHttpError } from "../utils/error.handle";

const loginUser = async ({ body }: Request, res: Response) => {
  try {
    const { name, email, password } = body;
    const user = await authService.loginUser({ email, password });

    if (user === "INCORRECT_PASSWORD") {
      res.status(400).json({
        msg: "User/Password incorrect",
      });
    } else {
      res.json(user);
    }
  } catch (error) {
    handleHttpError(res, "ERROR_LOGIN_USER", error);
  }
};

export { loginUser };
