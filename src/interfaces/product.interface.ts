export interface Product {
  name: string;
  description: string;
  price: number;
  img?: any;
  category: object; //pennyboard,skateboard,longboar
  status?: boolean;
  // user: object;
}

interface Img {
  public_id: string;
  url: string;
}

export enum boardType {
  penny = "Pennyboard",
  skate = "Skateboard",
  long = "Longbooard",
}
