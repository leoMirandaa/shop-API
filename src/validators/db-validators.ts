import UserModel from "../models/user";

const userIdExists = async (id: string) => {
  //todo review when id is not mongoId format
  console.log("____ ", id);
  const user = await UserModel.findById(id);
  console.log("..... ", user);
  if (!user) {
    throw new Error(`user id: ${id} doesn't exist`);
  }
};

const emailExists = async (email: string) => {
  const userEmail = await UserModel.findOne({ email: email });
  if (userEmail) {
    throw new Error(`${email} already exist`);
  }
};

export { emailExists, userIdExists };
