import { ObjectId, Document } from 'mongoose';

interface Products {
  item: ObjectId;
  quantity: number;
}

export interface Payment {
  subtotal: number;
  positiveBalance: number;
  negativeBalance: number;
  delivery: number;
  discount: number;
}

export interface Sells extends Document {
  products: Products[];
  amount: Payment;
  userId: ObjectId;
  storeId: ObjectId;
}
