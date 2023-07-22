export interface Product {
  name: string;
  description: string;
  price: number;
  img?: Img;
  status?: boolean;

  category: object; //shirts,pants,hoodies,hats
  size: SizeType;
  gender: GenderType;

  // user: object;
}

interface Img {
  public_id: string;
  url: string;
}

export enum SizeType {
  XS = "Xtra-small",
  SM = "Small",
  MD = "Medium",
  LG = "Large",
  XL = "Extra-large",
}
// ["Xtra-small", "Small", "Medium", "Large", "Extra-large"]

export enum GenderType {
  MEN = "Men",
  WOMEN = "Women",
  KID = "Kid",
  UNISEX = "Unisex",
}
// ["Men", "Women", "Kid", "Unisex"]
