import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

// order routes 
router.post("/", OrderController.createOrder);
router.get("/", OrderController.getOrders);

export const OrdersRoute = router;
