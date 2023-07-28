import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";
import fileUpload from "express-fileupload";

import searchRouter from "./routes/search";
import categoryRouter from "./routes/categories";
import productRouter from "./routes/products";
import userRouter from "./routes/users";
import authRouter from "./routes/auth";

const PORT = process.env.PORT || 30001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);

app.use("/search", searchRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

db().then(() => console.log("Conection Ready"));
app.listen(PORT, () => console.log(`Ready by port ${PORT}`));
