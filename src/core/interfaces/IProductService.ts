export interface IProductService {
  createProduct(input: any);
  updateStock(id: number, stock: number);
  getProducts(limit: number, offset: number);
}
