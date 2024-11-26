export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  category: string;
  image: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  product: Product;
}