export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface ICart {
  product: IProduct; quantity: number
}
