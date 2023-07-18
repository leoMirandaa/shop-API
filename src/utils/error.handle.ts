import { Response } from "express";

const handleHttpError = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(400);
  res.send({ error });
};

export { handleHttpError };
