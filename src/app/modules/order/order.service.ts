import { OrderModel } from "../../models/order-data-model";
import ProductModel from "../../models/product-data-model";
import { Order } from "./order.interface";

const createOrderInDb = async (orderData: Order) => {
    const product = await ProductModel.findById(orderData.productId);
    if (!product) {
        throw new Error(`Product with id ${orderData.productId} not found`);
    }

    const result = await OrderModel.create(orderData);
    return result;
};

const getOrdersFromDb = async (email?: string): Promise<Order[]> => {
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
