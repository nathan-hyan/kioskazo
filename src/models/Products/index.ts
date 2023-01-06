import { Product } from '@interfaces/product';
import { model, Schema } from 'mongoose';

const Products: Schema = new Schema(
  {
    name: { type: String, required: true },
    stock: { type: Number, required: false, default: 0 },
    barcode: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: false },
    providerProductCode: [
      {
        id: { type: Number, required: false },
        name: { type: String, required: false },
      },
    ],
    brand: { type: String, required: false },
    businessOwner: { type: String, required: false },
    dimensions: {
      height: { type: Number, required: false, default: 0 },
      width: { type: Number, required: false, default: 0 },
      depth: { type: Number, required: false, default: 0 },
    },
    weight: { type: Number, required: false, default: 0 },
    storeBranch: { type: String, required: true },
    storeId: { type: Schema.Types.ObjectId, ref: 'Stores', required: true },
    storePosition: { type: String, required: false, default: '' },
    description: { type: String, required: false, default: '' },
    specifications: [
      {
        title: { type: String, required: false, default: '' },
        description: { type: String, required: false, default: '' },
      },
    ],
    variants: [
      {
        color: { type: String, required: false, default: '' },
        barCode: { type: String, required: false, default: '' },
        stock: { type: Number, required: false, default: 0 },
      },
    ],
    price: {
      list: { type: Number, required: true, default: 0 },
      onlineStore: { type: Number, required: true, default: 0 },
      cash: { type: Number, required: true, default: 0 },
      cost: { type: Number, required: true, default: 0 },
      lastModified: { type: Date, required: true },
    },
    internalId: { type: Number, required: true, default: 0 },
    image: { type: String, required: false },
  },
  { timestamps: true },
);

export default model<Product>('Products', Products);
