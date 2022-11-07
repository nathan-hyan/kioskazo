import { ObjectId, Document } from 'mongoose';

export interface Product extends Document {
  name: string;
  internalId: number;
  price: {
    list: number;
    onlineStore: number;
    cash: number;
    cost: number;
  };
  stock: number;
  category: string;
  image: string;
  barcode: string;
  storeBranch: string;
  storeId: ObjectId;
}
