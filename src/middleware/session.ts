import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const userJWT = req.headers.authorization || null;
    const jwt = userJWT?.split(" ").pop();
    const user = verifyToken(`${jwt}`);

    if (!user) {
      res.status(401).json({ msg: '"INVALID_JWT"' });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(401).json({ msg: "INVALID_SESSION" });
  }
};

export { checkJWT };
