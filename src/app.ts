import cors from "cors"
import express, { Application, Request, Response } from "express"
import { ProductsRoute } from "./app/modules/product/product.route";
import { OrdersRoute } from "./app/modules/order/order.route";
const app: Application = express();

//parsers
app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("server runing")
})

// application routes 
app.use("/api/products", ProductsRoute)
app.use("/api/orders", OrdersRoute)


export default app;


