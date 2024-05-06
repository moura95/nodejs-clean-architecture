import { Product } from "../../core/entities/Product";
import { IProductRepository } from "../../core/interfaces/IProductRepository";

export class ProductRepositoryMemory implements IProductRepository {
  private products: Product[] = [];

  constructor() {
    this.products = [];
  }

  async create({ name, description, price, stock }: Product): Promise<Product> {
    const product = new Product(name, description, price, stock);
    this.products.push(product);
    return product;
  }
  async update(id: number, stock: number): Promise<Product> {
    let product;
    this.products.forEach((p) => {
      if (p.id === id) {
        p.stock = stock;
        product = p;
      }
    });
    return product;
  }
  async find(limit: number, offset: number): Promise<Product[]> {
    return this.products;
  }
}
