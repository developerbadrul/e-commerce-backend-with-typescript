/* eslint-disable no-undef */
import cors from "cors";
import express, { Application, Request, Response } from "express";
import path from "path";
import { ProductsRoute } from "./app/modules/product/product.route";
import { OrdersRoute } from "./app/modules/order/order.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// serve static files (documentation)
app.use(express.static(path.join(__dirname, "public")));

// application routes
app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api/products", ProductsRoute);
app.use("/api/orders", OrdersRoute);

export default app;
