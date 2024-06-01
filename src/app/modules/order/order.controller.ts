/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { OrderService } from "./order.service";

// new order create 

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const result = await OrderService.createOrderInDb(orderData);
        res.status(201).json({
            success: true,
            message: "Order created successfully!",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: `Error: ${error.message}`,
            data: null
        });
    }
};


// get order data 

const getOrders = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string;
        const result = await OrderService.getOrdersFromDb(email);
        res.status(200).json({
            success: true,
            message: email ? `Orders fetched successfully for user email '${email}'!` : "Orders fetched successfully!",
            data: result
        });
    } catch (error: unknown) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching orders!",
            data: null
        });
    }
};

export const OrderController = {
    createOrder,
    getOrders
};
