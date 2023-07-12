import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";

import categoryRouter from "./routes/categories";
import productRouter from "./routes/products";

const PORT = process.env.PORT || 30001;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/products", productRouter);

db().then(() => console.log("Conection Ready"));
app.listen(PORT, () => console.log(`Ready by port ${PORT}`));
