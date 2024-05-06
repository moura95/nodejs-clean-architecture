import { NextFunction, Request, Response } from "express";
import { ProductService } from "../../core/services/productService";

export class ProductController {
  private service: ProductService;

  constructor(service: ProductService) {
    this.service = service;
  }

  async onCreateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      // validate logic
      const data = await this.service.createProduct(body);

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async onGetProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const offset = parseInt(`${req.query.offset}`) || 0;
      const limit = parseInt(`${req.query.limit}`) || 10;

      const data = await this.service.getProducts(limit, offset);

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async onUpdateStock(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const stock = req.body.stock;

      const data = await this.service.updateStock(id, stock);

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
