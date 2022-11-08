import { model, Schema } from 'mongoose';
import { Sells } from '@interfaces/sells';

const SellsSchema: Schema = new Schema(
  {
    products: [
      {
        item: { type: Schema.Types.ObjectId, ref: 'Products' },
        quantity: Number,
      },
    ],
    amount: {
      subtotal: { type: String, default: 0, required: true },
      positiveBalance: { type: String, default: 0, required: true },
      negativeBalance: { type: String, default: 0, required: true },
      delivery: { type: String, default: 0, required: true },
      discount: { type: String, default: 0, required: true },
    },
    paymentType: { type: String, default: 'list', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    storeId: { type: Schema.Types.ObjectId, ref: 'Stores', required: true },
  },
  { timestamps: true },
);

export default model<Sells>('Sells', SellsSchema);
