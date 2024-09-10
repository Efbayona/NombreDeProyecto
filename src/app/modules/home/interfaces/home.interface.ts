export interface Categories {
  title: string,
  description: string,
  start_date: string,
  end_date: string,
  image: string;
}

export interface Product {
  image: string;
  title: string;
  description: string;
  price: number;
  onSale: boolean;
}
