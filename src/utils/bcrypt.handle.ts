import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  try {
    const hashedPassword = hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.log("ERROR_ENCRYPT_PASSWORD", error);
  }
};

const verify = async (password: string, hashedPassword: string) => {
  try {
    const isCorrect = await compare(password, hashedPassword);
    return isCorrect;
  } catch (error) {
    console.log("ERROR_VERIFY_PASSWORD", error);
  }
};

export { encrypt, verify };
