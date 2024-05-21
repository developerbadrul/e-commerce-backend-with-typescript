import cors from "cors"
import express, { Application, Request, Response } from "express"
import { ProductsRoute } from "./app/modules/product/product.route";
const app: Application = express();

//parsers
app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("server runing")
})

// application routes 
app.use("/api", ProductsRoute)

// my expected endpoint
// /api/products get/post
// /api/products/:productId get/put/delete/

// /api/products?searchTerm=iphone get
// /api/orders  post/get
// /api/orders?email=level2@programming-hero.com get




export default app;


