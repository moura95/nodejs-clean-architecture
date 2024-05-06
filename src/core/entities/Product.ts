export class Product {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public stock: number,
    public readonly id?: number
  ) {}
}
