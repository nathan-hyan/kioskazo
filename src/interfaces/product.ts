import { ObjectId, Document } from 'mongoose';

interface Variants {
  color: string;
  barCode: string;
  stock: number;
}

interface Price {
  list: number;
  onlineStore: number;
  cash: number;
  cost: number;
}

interface Dimensions {
  height: number;
  width: number;
  depth: number;
}
export interface Product extends Document {
  name: string;
  stock: number;
  barcode: string;
  category: string;
  provider: string;
  brand: string;
  businessOwner: string;
  dimensions: Dimensions;
  weight: number;
  storeBranch: string;
  storeId: ObjectId;
  storePosition: string;
  description: string;
  specifications: {
    title: string;
    description: string;
  }[];
  variants: Variants[];
  price: Price;
  internalId: number;
  image: string;
}
