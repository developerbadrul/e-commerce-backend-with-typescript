import { OrderModel } from "../../models/order-data-model";
import ProductModel from "../../models/product-data-model";
import { Order } from "./order.interface";

const createOrderInDb = async (orderData: Order) => {
    const product = await ProductModel.findById(orderData.productId);
    if (!product) {
        throw new Error(`Product with id ${orderData.productId} not found`);
    }

    if (product.inventory.quantity < orderData.quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }

    const result = await OrderModel.create(orderData);
    return result;
};

const getOrdersFromDb = async (email?: string) => {
    if (email) {
        return await OrderModel.find({ email });
    } else {
        return await OrderModel.find();
    }
};

export const OrderService = {
    createOrderInDb,
    getOrdersFromDb
};
