import express from "express";
import { ProductRepository } from "../repositories/productRepository";
import { ProductService } from "../services/productService";
import { Mailer } from "../external-libraries/mailer";
import { MessageBroker } from "../external-libraries/messageBroker";
import { ProductController } from "../controllers/productController";

const repository = new ProductRepository();
const mailer = new Mailer();
const broker = new MessageBroker();

const service = new ProductService(repository, mailer, broker);

const controller = new ProductController(service);
const router = express.Router();

router.post("/products", controller.onCreateProduct.bind(controller));
router.get("/products", controller.onGetProducts.bind(controller));
router.patch("/products/:id", controller.onUpdateStock.bind(controller));

export default router;
