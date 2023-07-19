export interface Product {
  name: string;
  description: string;
  price: number;
  img?: Img;
  status?: boolean;
  category: object;
  // user: object;
}

interface Img {
  public_id: string;
  url: string;
}
