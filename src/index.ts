import express from "express";
import productRouter from "./infra/routes/productRoutes";
import { errorHandler } from "./infra/middlewares/errorHanderl";

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(errorHandler);

app.use(productRouter);

app.listen(PORT, () => {
  console.log("Listening to: ", PORT);
});
