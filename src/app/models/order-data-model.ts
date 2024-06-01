import { Schema, model } from 'mongoose';
import { Order } from '../modules/order/order.interface';

const OrderSchema = new Schema<Order>({
    email: String,
    productId: String,
    price: Number,
    quantity: Number,
});


// Order Model 
export const OrderModel = model<Order>('Order', OrderSchema);
