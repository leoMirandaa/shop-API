import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process?.env?.SECRET_JWT || "secret.TOken.33244ftm";

const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return jwt;
};

const verifyToken = (jwt: string) => {
  const isTokenOk = verify(jwt, JWT_SECRET);
  return isTokenOk;
};

export { generateToken, verifyToken };
