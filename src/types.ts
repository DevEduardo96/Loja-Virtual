export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: number;
  created_at?: string;
}

export interface CartItem extends Product {
  quantity: number;
}