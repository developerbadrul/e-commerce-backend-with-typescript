import mongoose, { Schema, Model } from 'mongoose';
import { Inventory, Product, Variant } from '../modules/product/product.interface';

// Schema
const variantSchema: Schema<Variant> = new Schema({
    type: { type: String, required: true },
    value: { type: String, required: true }
});

const inventorySchema: Schema<Inventory> = new Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});

const productSchema: Schema<Product> = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true }
});

// Product model
const productModel: Model<Product> = mongoose.models.Product || mongoose.model<Product>('Product', productSchema);

export default productModel;
